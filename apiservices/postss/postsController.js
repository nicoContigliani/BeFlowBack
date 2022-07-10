const postsModel = require('./postsModel')
const postDto = require('./postsDto')




const get = async (req, res) => {
    try {
        console.log(hola)
        // const postsdata = await postsModel.getPost();
        // const postRow = await postDto.singles(postsdata)
        res.status(200).json(
            {
                data: postRow,
                status: 200
            }
        );
    } catch (error) {
        console.log(error)
        res.status(400).json(
            {
                data: 0,
                status: 400
            }
        );
    }

}






const getId = async (req, res) => {
    // try {
    //     const id_user = parseInt(req.params.id);
    //     const budget = await budgetModel.getBudget(id_user);
    //     const budgetRow = await budgetDto.singles(budget)
    //     res.status(200).json(
    //         {
    //             data: budgetRow,
    //             status: 200
    //         }
    //     );
    // } catch (error) {
    //     res.status(400).json(
    //         {
    //             data: 0,
    //             status: 400

    //         }
    //     );
    // }

}

const save = async (req, res) => {
    try {
        const postSave = await postsModel.savePost(req.body);

        // const id_user = parseInt(req.body.id_user)
        const postsdata = await postsModel.getPost();
        const postRow = await postDto.singles(postsdata)
        res.status(200).json(
            {
                data: postRow,
                status: 200
            }
        );

    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400
            }
        );
    }


}

const deletes = async (req, res) => {
    try {
        const id_post = parseInt(req.params.id);
        // const id_user = req.body.id_user
        const postss = await postsModel.deletePost(id_post);
        const postsdata = await postsModel.getPost();
        const postRow = await postDto.singles(postsdata)
        res.status(200).json(
            {
                data: postRow,
                status: 200
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400
            }
        );
    }




}
const update = async (req, res) => {
    try {
        const id_post = parseInt(req.params.id);
        const id_user = parseInt(req.body.id_user);
        const element = req.body;
        const everything = { ...element, id_post }
        const posts = await postsModel.updateBudget(everything);

        const postsdata = await postsModel.getPost();
        const postRow = await postDto.singles(postsdata)
        res.status(200).json(
            {
                data: postRow,
                status: 200
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400
            }
        );
    }
}


module.exports = {
    get,
    getId,
    save,
    deletes,
    update
}