const pool = require('../../config/database');
const uuid = require('uuid').v4

const getPayAll = async () => {

    try {
        const response = await pool.query('SELECT * FROM payments INNER JOIN  payments_exchange pe ON payments.id = pe.id_exchange ;');
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
    const { object, description, billed_at, billed_hours, amount, currency, created_at, updated_at } = resource.resource;
    console.log(resource, "esto me llega a dao pay")

    try {
        if (description === "Pago" || needs_exchange === true) {
            console.log("si entro")
            const id_exchange = id
            const valors = parseInt(valor)
            const amount = parseInt(billed_at) * parseInt(valor)
            const exchangeexchange_rate = valors
            const exchangecurrency = currency
            const original_amount = billed_hours
            const exchange_rate = valors
            const response = await pool.query(`INSERT INTO public.payments (id, "object", description, billed_at, billed_hours, amount, currency, created_at, updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`, [id, object, description, billed_at, billed_hours, amount, currency, created_at, updated_at]);

            const sec = await pool.query(` INSERT INTO public.payments_exchange (id_exchange, original_amount, currency, exchange_rate) VALUES ($1,$2,$3,$4)`, [id_exchange, original_amount, currency, exchange_rate]);


        } else {
            console.log("no entro")
            const response = await pool.query(`INSERT INTO public.payments (id, "object", description, billed_at, billed_hours, amount, currency, created_at, updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`, [id, object, description, billed_at, billed_hours, amount, currency, created_at, updated_at]);
            const ress = await pool.query(` INSERT INTO public.payments_exchange (id_exchange, exchangeoriginal_amount, exchangecurrency, exchangeexchange_rate) VALUES ($1,$2,$3,$4)`, [id_exchange = id, exchangeoriginal_amount = billed_hours, exchangecurrency = currency, exchangeexchange_rate = valor]);

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

const deletePay = async (data) => {

    try {
        const response = await pool.query(`DELETE FROM public.paymentsWHERE id = "${data}"`);
        post = response.rows
        return post
    } catch (error) {
        console.log(error)
    }
}




module.exports = {
    getPayAll,
    getIdPay,
    savePay,
    deletePay

}