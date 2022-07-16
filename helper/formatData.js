const formatDate = async(dates)=>{
    let aDate = new Date(dates)
    let day = aDate.getDate()
    let month = aDate.getMonth() + 1
    let year = aDate.getFullYear()
    const dateReturn =await `${day}-${month}-${year}`
    return dateReturn
}


module.exports={formatDate}