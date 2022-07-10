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



// const savePost = async (resource) => {
//   const posts = await postsDao.savePost(resource)
//   return posts
// }
// const deletePost = async (id_budget) => {
//   const budget = await postsDao.deletePost(id_budget)
//   return budget
// }
// const updateBudget = async (everything) => {
//   const budget = await postsDao.updatePost(everything)
//   return budget
// }



module.exports = {
  getPay
}