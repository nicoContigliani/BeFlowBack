 const payDao = require('./payDao');
// const bcrypt = require('bcrypt')



const getPay = async () => {
  const payGet = await payDao.getPayAll()
  console.log(payGet)

  const payget = "hola"
  return payget
}

// const getIdPost = async (id_user) => {
//   const postsget = await postsDao.getPost(id_user)
//   return posts
// }



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



module.exports = {
  getPay,
  savePay
}