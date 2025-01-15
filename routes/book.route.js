const express = require("express")
const router = express.Router()
const bookController = require("../controllers/book.controller")

router.get("/books",bookController.getBookList)
router.get("/book/:id",bookController.getSingleBook)
router.post("/book",bookController.createBook)
router.put("/book/:id",bookController.updateBook)
router.delete("/book/:id",bookController.deleteBook)

module.exports = router