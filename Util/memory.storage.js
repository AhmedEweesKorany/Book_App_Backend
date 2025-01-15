var memoryStorage = require("memorystorage")

var store = new memoryStorage("book-app")

  const getKeys = (store)=>{
    var keys = []
    for(let i = 0 ; i < store.length ; i++){
        var key = store.key(i)
        keys.push(key)
    }
    return keys
}


const getValues = (store)=>{
    var values = []
    for(let i = 0 ; i < store.length ; i++){
        var key = store.key(i)
        var value =store.getItem(key)
        values.push(value)
    }
    return values
}


module.exports = {getValues,getKeys,store}
