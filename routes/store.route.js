const express = require("express")
const router = express.Router()
const storeController = require("../controllers/store.controller")

router.get("/stores",storeController.getStoreList)
router.get("/store/:id",storeController.getSingleStore)
router.post("/store",storeController.createStore)
router.put("/store/:id",storeController.updateStore)
router.delete("/store/:id",storeController.deleteStore)

module.exports = router