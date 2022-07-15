 const payDao = require('./payDao');
// const bcrypt = require('bcrypt')



const getPay = async (data) => {
  const payGet = await payDao.getPayAll(data)
  return payGet
}

const getPayID = async (data) => {
  const payGet = await payDao.getPayID(data)
  return payGet
}





const savePay = async (resource) => {
  console.log(resource,"mira como vas")

  const pay = await payDao.savePay(resource)
//   return posts
// }
// const deletePost = async (id_budget) => {
//   const budget = await postsDao.deletePost(id_budget)
//   return budget
// }
// const updateBudget = async (everything) => {
//   const budget = await postsDao.updatePost(everything)
//   return budget
}

const deletePay = async (resource) => {

   const pay = await payDao.deletePay(resource)

}
const updatePay = async (resource) => {

   const pay = await payDao.updatePay(resource)
  //  console.log(pay,"esto llega a pay que divertido")
}


module.exports = {
  getPay,
  getPayID,
  savePay,
  deletePay,
  updatePay
}