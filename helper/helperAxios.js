const axios = require('axios');

const helperAxiosGet = async (data) => {
    const { description, billed_hours, billet_at, billing_currency, billed_amount, needs_exchange, exchange_currency, created_at, updated_at } = data;
    const repuesta = await axios.get('https://mindicador.cl/api/uf/10-6-2022')
    const { fecha, valor } = repuesta.data.serie[0]
    //     const r = { valor, fecha }
    //     console.log(r)
    //     re.push(r)


    const dataApi = { fecha, valor }
    console.log(dataApi, "esto esta en helper")
    return dataApi
}


module.exports = helperAxiosGet;

