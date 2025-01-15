const pool = require("./pool")

const query = (queryText,queryParams = [])=>{

    return new Promise((resolve,reject)=>{
        pool.query(queryText,queryParams)
        .then(res=>{
        resolve(res)
        }).catch(e=>{
            reject(e)
        })
    })
    
} 
module.exports = query
