const pool = require('../../config/database');
const uuid = require('uuid').v4

const  getPayAll= async () => {
 
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
        const response = await pool.query(`select * from public.payments  WHERE id = ${id}` );
        user = response.rows
        return user
    } catch (error) {
        console.log(error)

    }
}

const savePay = async (resource) => {
    const id= uuid()
    
    const {  object, description, billed_at, billed_hours, amount, currency, exchangeoriginal_amount, exchangecurrency, exchangeexchange_rate, created_at, updated_at } = resource;
    try {
        const response = await pool.query(`INSERT INTO public.payments (title, bodys, urlimg) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`, [id, object, description, billed_at, billed_hours, amount, currency, exchangeoriginal_amount, exchangecurrency, exchangeexchange_rate, created_at=new Date(), updated_at]);

        posts = response.rows
        return posts
    } catch (error) {
        console.log(error)

    }
}





module.exports = {
     getPayAll,
     getIdPay,
     savePay

}