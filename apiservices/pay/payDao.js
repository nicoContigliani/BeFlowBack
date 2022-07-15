const pool = require('../../config/database');
const uuid = require('uuid').v4

const getPayAll = async (datas) => {
    console.log(datas, "esto llega")
    const dataInt = parseInt(datas.page)
    console.log(dataInt)


    if (dataInt === 1) {
        console.log("tra esto")
        try {
            const response = await pool.query(`SELECT * FROM payments INNER JOIN  payments_exchange pe ON payments.id = pe.id_exchange limit 100 offset 0;`);
            data = response.rows
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }

    } else {
        try {
            const response = await pool.query(`SELECT * FROM payments INNER JOIN  payments_exchange pe ON payments.id = pe.id_exchange limit 100 offset 100;`);
            data = response.rows
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }



    const getPayID = async (id_user) => {
        // console.log(id_user)
        try {
            const response = await pool.query(`select * from public.payments  WHERE id = ${id}`);
            user = response.rows
            return user
        } catch (error) {
            console.log(error)

        }
    }


}

const getPayID = async (id) => {
    const data = id
    console.log(data, "retorna")
    try {
        const response = await pool.query(`SELECT * FROM payments INNER JOIN  payments_exchange pe ON payments.id = pe.id_exchange where payments.id='${id}'`);
        user = response.rows
        return user
    } catch (error) {
        console.log(error)

    }
}

const savePay = async (resource) => {
    const id = uuid()
    const { valor, fecha } = resource.resultado
    const { object, description, billed_at, billed_hours, amount, currency = "clf", created_at = new Date(), updated_at = new Date() } = resource.resource;
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
}

const deletePay = async (data) => {
    const d = `${data}`

    try {
        const responses = await pool.query(`delete  from payments where id in (select id_exchange from payments_exchange where id_exchange='${d}')`);
        const resp = responses.rows
        return resp

    } catch (error) {
        console.log(error)
    }
}

const updatePay = async (everything) => {
    console.log(everything, "esto llega a dao")

    // const { id, description, billed_hours, billed_at, billing_currency, billed_amount, needs_exchange, exchange_currency } = body
    // const { fecha, valor } = resultado
    // const { amount, currency = "clf", created_at = new Date(), updated_at = new Date() } = resource;
    // const reP = await pool.query(`SELECT * FROM payments INNER JOIN  payments_exchange pe ON payments.id = pe.id_exchange where payments.id='${body.id}'`);
    // console.log(reP, "eesto viene del select")


    // try {
    //     if (description === "Pago" || needs_exchange === true) {
    //         console.log("si entro")
    //         const id_exchange = id
    //         const valors = parseInt(valor)
    //         const amount = parseInt(billed_at) * parseInt(valor)
    //         const exchangeexchange_rate = valors
    //         const exchangecurrency = currency
    //         const original_amount = billed_hours
    //         const exchange_rate = valors

    //         // const responses = await pool.query(` UPDATE public.payments SET  "object"=${object}, description=${description}, billed_at=${billed_at}, billed_hours=${billed_hours}, amount=${amount}, currency=${currency}, created_at=${created_at}, updated_at=${updated_at} where id ='${id}'`);
    //         // const resp = await pool.query(`UPDATE public.payments_exchange SET  original_amount=${original_amount}, currency=${currency}, exchange_rate=${exchange_rate} where id_exchange='${id_exchange}'; `)



    //     } else {
    //         const response = await pool.query(`INSERT INTO public.payments (id, "object", description, billed_at, billed_hours, amount, currency, created_at, updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`, [id, object, description, billed_at, billed_hours, amount, currency, created_at, updated_at]);
    //         const ress = await pool.query(` INSERT INTO public.payments_exchange (id_exchange, exchangeoriginal_amount, exchangecurrency, exchangeexchange_rate) VALUES ($1,$2,$3,$4)`, [id_exchange = id, exchangeoriginal_amount = billed_hours, exchangecurrency = currency, exchangeexchange_rate = valor]);
    //         console.log("no entro")

    //     }
    // } catch (error) {
    //     console.log(error)
    // }



}


module.exports = {
    getPayAll,
    getPayID,
    savePay,
    deletePay,
    updatePay

}