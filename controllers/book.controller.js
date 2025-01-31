const query = require("../db/connection");
const queryList = require("../db/queries");
const LoggerService = require("../services/logger.service");


const logger = new LoggerService('book.controller')
const getBookList = async (req, res) => {
  try {
    const values = await query(queryList.GET_BOOK_LIST_QUERY); 
    logger.info("Return book list",values.rows)
    return res.status(200).send(values.rows);
  } catch (error) {
    res.send({ msg: "Error happend while retriveing books", error });
  }
};

const getSingleBook = async (req, res) => {
  const book_id = req.params.id;
  try {
    const data = await query(queryList.GET_SIGNLE_BOOK, [book_id]);
    return res.status(200).send({ ...data.rows[0] });
  } catch (error) {
    res.status(500).send({ msg: "erro happedn while getting single book", error });
  }
};

const createBook = async (req, res) => {
  const { book_title, book_description, book_author, book_publisher,book_pages,createdBy,store_code } = req.body;
  if (!book_title || !book_description || !book_author || !createdBy || !book_publisher || !book_pages ||!store_code) {
    return res.status(403).send({ msg: "validation error" });
  }
  try {
    await query(queryList.CREATE_BOOK_QUERY, [
        book_title,
        book_description,
        book_author,
        book_publisher,
        book_pages,
        createdBy,
        store_code
    ]);
    res.status(200).send({ msg: "Book Created Successfully" });
  } catch (error) {
    res.status(500).send({ msg: "erro happedn while creating Book", error });
  }
};

const updateBook = async (req, res) => {
  const book_id = req.params.id;
  // get current data
  query(queryList.GET_SIGNLE_BOOK, [book_id]).then(async (curData) => {
    const data = {
        book_title: req.body.book_title || curData.rows[0].book_title,
        book_description: req.body.book_description || curData.rows[0].book_description,
        book_author: req.body.book_author || curData.rows[0].book_author,
        book_publisher: req.body.book_publisher || curData.rows[0].book_publisher,
        book_pages: req.body.book_pages || curData.rows[0].book_pages,
        createdBy: req.body.createdBy || curData.rows[0].created_by,
        store_code: req.body.store_code || curData.rows[0].store_code,
    };

    // update only data that user want

    try {
      await query(queryList.UPDATE_BOOK_QUERY, [
        data.book_title,
        data.book_description,
        data.book_author,
        data.book_publisher,
        data.book_pages,
        data.createdBy,
        data.store_code,
        book_id,
      ]);
      res.status(200).send({ msg: "book Updated Successfully Successfully" });
    } catch (error) {
      res.status(500).send({ msg: "erro happedn while updating book", error });
    }
  });
};

const deleteBook = async (req, res) => {
  const book_id = req.params.id;
  try {
    await query(queryList.DELETE_BOOK_QUERY, [book_id]);
    res.status(200).send({ msg: "Book deleted Successfully" });
  } catch (error) {
    res.status(500).send({ msg: "erro happend while deleteing book", error });
  }
};
module.exports = {
    getBookList,
    createBook,
    updateBook,
    deleteBook,
  getSingleBook,
};
