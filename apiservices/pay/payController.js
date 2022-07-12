const payModel = require('./payModel')
const axios = require('axios');
const { response } = require('../../app');
const helperAxiosGet = require('../../helper/helperAxios');
// const postDto = require('./postsDto')





const getPage = async (req, res) => {
    console.log(req.body, "esta en el select 12")
    try {

        const dataPay = await payModel.getPay(req.body);


        // const postRow = await postDto.singles(postsdata)


        if (Object.keys(dataPay).length === 0) {
           res.status(200).json(
            {
                // data: postRow,
                status: 400
            }
        );
        } else {
            res.status(200).json(
            {
                // data: postRow,
                status: 200
            }
        );
        }

    } catch (error) {
        console.log(error)
        res.status(404).json(
            {
                data: 0,
                status: 404
            }
        );
    }

}

const getID = async (req, res) => {
    console.log(req.params.id)
    try {
        // const postsdata = await payModel.getPay();
        // const postRow = await postDto.singles(postsdata)
        res.status(200).json(
            {
                // data: postRow,
                status: 200
            }
        );
    } catch (error) {
        console.log(error)
        res.status(404).json(
            {
                data: 0,
                status: 404
            }
        );
    }

}

const save = async (req, res) => {

    const { description, billed_hours, billet_at, billing_currency, billed_amount, needs_exchange, exchange_currency, created_at, updated_at } = req.body;
    let resource = req.body
    try {
        let resultado;
        if (description === 'Pago' || needs_exchange === true) {
            const resultado = await helperAxiosGet(req.body)
            const data = {
                resource, resultado
            }
            const paySave = await payModel.savePay(data);
            res.status(200).json(
                {
                    data: 0,
                    status: 200
                }
            );
        } else {
            const data = {
                resource
            }
            const paySave = await payModel.savePay(data);
            res.status(200).json(
                {
                    data: 0,
                    status: 200
                }
            );
        }
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400
            }
        );
    }

    // try {
    //     console.log(req.body)

    //     //  console.log(re)



    //     // const id_user = parseInt(req.body.id_user)
    //     // const postsdata = await postsModel.getPost();
    //     // const postRow = await postDto.singles(postsdata)

    //     res.status(200).json(
    //         {
    //             data: postRow,
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


const deletes = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const dataPay = await payModel.deletePay(id);
        res.status(200).json(
            { "message": "payment sucessfully deleted" }
        );


    } catch (error) {
        console.log(error)

    }

}
module.exports = {
    getPage,
    save,
    deletes,
    getID
}