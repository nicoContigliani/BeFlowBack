const payModel = require('./payModel')
const axios = require('axios')
// const postDto = require('./postsDto')
const get = async (req, res) => {


    try {


        const postsdata = await payModel.getPay();
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

// const getIdPay = async (req, res) => {
//     try {
//         // const postsdata = await payModel.getPay();
//        // const postRow = await postDto.singles(postsdata)
//        res.status(200).json(
//            {
//                // data: postRow,
//                status: 200
//            }
//        );
//    } catch (error) {
//        console.log(error)
//        res.status(404).json(
//            {
//                data: 0,
//                status: 404
//            }
//        );
//    }

// }

const save = async (req, res) => {
    try {
        const re = []
        console.log(req.body)
        const { description, billed_hours, billet_at, billing_currency, billed_amount, needs_exchange, exchange_currency, created_at, updated_at } = req.body;
        if (description === 'Pago' || needs_exchange === true) {
         const repuesta = await axios.get('https://mindicador.cl/api/uf/10-6-2022')
        console.log(repuesta.data,"59-********************")
        const { unidad_medida,} =repuesta.data
       
        // re.push(repuesta)

        }
        //  console.log(re)


        // const postSave = await postsModel.savePost(req.body);

        // const id_user = parseInt(req.body.id_user)
        // const postsdata = await postsModel.getPost();
        // const postRow = await postDto.singles(postsdata)

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
    save
    // getIdPay
}