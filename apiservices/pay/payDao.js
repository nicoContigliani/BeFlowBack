const pool = require('../../config/database');
const uuid = require('uuid').v4

const getPayAll = async () => {

    try {
        const response = await pool.query('select * from public.payments ;');
        post = response.rows
        return post
    } catch (error) {
        console.log(error)
    }
}

const getIdPay = async (id_user) => {
    // console.log(id_user)
    try {
        const response = await pool.query(`select * from public.payments  WHERE id = ${id}`);
        user = response.rows
        return user
    } catch (error) {
        console.log(error)

    }
}

const savePay = async (resource) => {
    const id = uuid()
    const { valor, fecha } = resource.resultado
    const { description, billed_hours, billed_at, billing_currency, billed_amount, needs_exchange, exchange_currency, created_at, updated_at } = resource.resource;
    console.log(resource, "esto me llega a dao pay")

    try {
        if (description === "Pago" || needs_exchange === true) {
            console.log("si entro")
            const id_exchange = id
            const amount = parseInt(billed_at) * parseInt(valor)
            //console.log(amount ,"esto es amount  ")

            const response = await pool.query(`INSERT INTO public.payments (id, description, billed_hours, billet_at, billing_currency, billed_amount, needs_exchange, exchange_currency, created_at, updated_at,amount) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`, [id, object, description, billed_at, billed_hours, billing_currency, currency, exchangeoriginal_amount, exchangecurrency, exchangeexchange_rate, created_at = new Date(), updated_at, amount]);
            const res = await pool.query(` INSERT INTO public.payments_exchange (id_exchange, original_amount, currenci, exchange_rate) VALUES ($1,$2,$3,$4)`, [id_exchange, original_amount, currenci, exchange_rate]);

        } else {
            console.log("no entro")
              const response = await pool.query(`INSERT INTO public.payments (id, description, billed_hours, billet_at, billing_currency, billed_amount, needs_exchange, exchange_currency, created_at, updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`, [id, object, description, billed_at, billed_hours, amount, currency, exchangeoriginal_amount, exchangecurrency, exchangeexchange_rate, created_at = new Date(), updated_at,amount=billed_amount]);
        }
    } catch (error) {
        console.log(error)
    }



    // try {
    //     const response = await pool.query(`INSERT INTO public.payments (id, description, billed_hours, billet_at, billing_currency, billed_amount, needs_exchange, exchange_currency, created_at, updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`, [id, object, description, billed_at, billed_hours, amount, currency, exchangeoriginal_amount, exchangecurrency, exchangeexchange_rate, created_at = new Date(), updated_at]);
    // } catch (error) {

    // }
    // try {
    //     // 
    //     // if (description === "Pago" || needs_exchange === true){
    //     //     const response = await pool.query(` INSERT INTO public.payments_exchange (id_exchange, original_amount, currenci, exchange_rate) VALUES ($1,$2,$3,$4)`, [id_exchange, original_amount, currenci, exchange_rate]);
    //     // }

    //         posts = response.rows
    //         return posts
    //     } catch (error) {
    //         console.log(error)

    //     }
}





module.exports = {
    getPayAll,
    getIdPay,
    savePay

}