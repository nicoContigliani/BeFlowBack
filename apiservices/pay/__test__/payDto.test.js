const {
    single,
    singles,
    register,
    login,
    estructure,
    estructureID
} = require('../payDto')



describe('Dto', () => {

const data =[
    {
      id: 'eab536af-149a-4cb2-b721-0c3b1fd6385d',
      object: 'clean',
      description: 'Pago',
      billed_at: '1-5-2021',
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

test('estructure getId ',async () => {
    const result =await estructureID(data)
        expect(result).toBeInstanceOf(Array);
});

test('estructure getId with page = 1',async () => {
    const result =await estructure(data)
    expect(result).toBeInstanceOf(Array);
});


});