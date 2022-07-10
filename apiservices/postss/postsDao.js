const pool = require('../../services/database');
const bcrypt = require('bcrypt')





const getPost = async () => {
    // console.log(id_user)
    try {
        const response = await pool.query('SELECT *  FROM public.post p ORDER BY id_post desc;');
        post = response.rows
        return post
    } catch (error) {
        console.log(error)

    }
}


const getIdPost = async (id_user) => {
    // console.log(id_user)
    try {
        const response = await pool.query('SELECT *  FROM public.budgets WHERE id_user =' + id_user + ' ORDER BY id_budget desc');
        user = response.rows
        return user
    } catch (error) {
        console.log(error)

    }
}





const savePost = async (resource) => {
    const { title, bodys, urlimg } = resource;
    try {
        const response = await pool.query('INSERT INTO public.post (title, bodys, urlimg) VALUES ($1,$2,$3)', [title, bodys, urlimg]);

        posts = response.rows
        return posts
    } catch (error) {
        console.log(error)

    }
}




const deletePost = async (id_post) => {
    try {
        const response = await pool.query('DELETE FROM public.post WHERE id_post = $1', [
            id_post
        ]);
        post = response.rows
        return post
    } catch (error) {
        console.log(error)

    }
}

const updatePost = async (everything) => {
    console.log(everything)
    try {

        const { title, bodys, urlimg, id_post } = everything;
        const response = await pool.query('UPDATE public.post SET title = $1, bodys = $2,urlimg =$3 where id_post = $4', [
            title, bodys, urlimg, id_post
        ]);

        budgets = response.rows
        return budgets
    } catch (error) {
        console.log(error)

    }
}


module.exports = {
    // getBudgets,
    getPost,
    savePost,
    deletePost,
    updatePost,

}