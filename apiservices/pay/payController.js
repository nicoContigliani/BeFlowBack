 const payModel = require('./payModel')
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





module.exports = {
    get,
    // getIdPay
}