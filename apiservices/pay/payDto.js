const { formatDate } = require("../../helper/formatData");

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

  const rest = await resource.map(async (item) => {

    const { id, object, description, billed_hours, billed_at, amount, currency, original_amount, exchange_rate, created_at, updated_at } = item;

    const fecha = await formatDate(billed_at)
    

    resultado.push(
      {
        id: id,
        object: object,
        description: description,
        billed_hours: billed_hours,
        billed_at: `${fecha}`,
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



    console.log(resultado, "esto estaría volviendo")

    return resultado
  }
  )

  return resultado
}



const estructureID = async (resource) => {
  console.log(resource,"esto en dto")
  const { id, object, description, billed_hours, billed_at, amount, currency, original_amount, exchange_rate, created_at, updated_at } = resource[0];
  const resultado = []

  const re = await formatDate(billed_at)
  const creates = await formatDate(created_at)
  const updates = await formatDate(updated_at)


  resultado.push(
    {
      id: id,
      object: object,
      description: description,
      billed_hours: billed_hours,
      billed_at: re,
      amount: amount,
      currency: currency,
      exchange: {
        original_amount: original_amount,
        currency: "clf",
        exchange_rate: exchange_rate
      },
      created_at: creates,
      updated_at: updates
    }

  )

  console.log(resultado, "esta es la respuesta")
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
