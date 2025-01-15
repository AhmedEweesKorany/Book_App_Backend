const Store = class Store {
    constructor(storeId,storeName,code , address ){
        this.storeId = storeId
        this.storeName = storeName
        this.code =code
        this.address = address
    }
}

module.exports = Store