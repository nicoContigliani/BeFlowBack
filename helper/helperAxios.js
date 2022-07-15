const axios = require('axios');

const helperAxiosGet = async (data) => {
    const { description, billed_hours, billet_at, billing_currency, billed_amount, needs_exchange, exchange_currency, created_at, updated_at } = data;

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let fullYear = date.getFullYear();


    let fechas = `${day}-${month}-${fullYear}`;
    console.log(fechas,"fechas")

    const repuesta = await axios.get(`https://mindicador.cl/api/uf/${fechas}`)
    const { fecha, valor } = repuesta.data.serie[0]

    const dataApi = { fecha, valor }
    return dataApi
}


module.exports = helperAxiosGet;

