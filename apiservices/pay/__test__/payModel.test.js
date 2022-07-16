const { getPay,
    getPayID,
    savePay,
    deletePay,
    updatePay } = require('../payModel')




describe('"Model"', () => {
    // getPayId entra
    const id = 'eab536af-149a-4cb2-b721-0c3b1fd6385d'

        const re=   [
            {
              id: 'eab536af-149a-4cb2-b721-0c3b1fd6385d',
              object: 'clean',
              description: 'Pago',
              billed_at: '2021-05-01T03:00:00.000Z',
              billed_hours: '2.5',
              amount: 67242712,
              currency: 'clf',
              created_at: '2022-07-16T10:55:00.436-03:00',
              updated_at: '2022-07-16T10:55:00.436-03:00',
              id_exchange: 'eab536af-149a-4cb2-b721-0c3b1fd6385d',
              original_amount: '2.5',
              exchange_rate: 33272
            }
          ] 
    

    test('getId ', async () => {
        const result = await getPayID(id)
        console.log(result,"esto esta result test")
        expect(result).toBeInstanceOf(Array);
    });

    test('getId not equal ', async () => {
        const result = await getPayID(id)
        console.log(result,"esto esta result test")
        expect(result).not.toBe(re);
    });





});