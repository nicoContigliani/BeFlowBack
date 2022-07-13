const single = (resource, authUser) => (
  {
    id_user: resource.id_user,
    fullname: resource.fullname,
    password: resource.password,
  });

const singles = async (resource) => {

  const rest = await resource.map((item) => {

    return item
  }
  )

  return rest
}


const register = async (resource) => {

  const data = resource[0]
  const rest = await data.map((item) => {
    delete item.password
    return item
  }
  )

  return rest
}


const login = async (resource) => {

  const data = resource[0]
  const rest = await data.map((item) => {
    delete item.password
    return item
  }
  )

  return rest
}

const estructure = async (resource) => {

  const resultado = []

  const rest = await resource.map((item) => {
    console.log(item, "trae")
    const { id, object, description, billed_hours, billed_at, amount, currency, original_amount, exchange_rate, created_at, updated_at } = item;

    resultado.push(
      {
        id: id,
        object: object,
        description: description,
        billed_hours: billed_hours,
        billed_at: billed_at,
        amount: amount,
        currency: currency,
        exchange: {
          original_amount: original_amount,
          currency: "clf",
          exchange_rate: exchange_rate
        },
        created_at: created_at,
        updated_at: updated_at
      }

    )





    return resultado
  }
  )

  return resource
}



const estructureID = async (resource) => {
const { id, object, description, billed_hours, billed_at, amount, currency, original_amount, exchange_rate, created_at, updated_at } =resource[0];
  const resultado = []

  resultado.push(
    {
      id: id,
      object: object,
      description: description,
      billed_hours: billed_hours,
      billed_at: billed_at,
      amount: amount,
      currency: currency,
      exchange: {
        original_amount: original_amount,
        currency: "clf",
        exchange_rate: exchange_rate
      },
      created_at: created_at,
      updated_at: updated_at
    }

  )

console.log(resultado,"esta es la respuesta")
  return resultado
}




module.exports = {
  single,
  singles,
  register,
  login,
  estructure,
  estructureID
};
