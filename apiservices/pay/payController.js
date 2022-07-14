const payModel = require('./payModel')
const axios = require('axios');
const { response } = require('../../app');
const helperAxiosGet = require('../../helper/helperAxios');
const paytDto = require('./../pay/payDto')





const getPage = async (req, res) => {
    try {
        const dataPay = await payModel.getPay(req.body);
        const payRow = await paytDto.estructure(dataPay)
        console.log(payRow,"como puedese ser")

        if (Object.keys(dataPay).length === 0) {
            res.status(200).json(
                {
                    // data: postRow,
                    status: 400
                }
            );
        } else {
            res.status(200).json(
                [{
                    payRow,
                    status: 200

                } ]

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

    const { id } = req.params;
    try {
        const paydata = await payModel.getPayID(id);
        const payRow = await paytDto.estructureID(paydata)
        res.status(200).json(
            {
                payRow,
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
}


const deletes = async (req, res) => {
    const { id } = req.params;
    try {
        const dataPay = await payModel.deletePay(id);
        res.status(200).json(
            { "message": "payment sucessfully deleted" }
        );
    } catch (error) {
    }
}
module.exports = {
    getPage,
    save,
    deletes,
    getID
}