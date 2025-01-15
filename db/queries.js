const queryList = {
    GET_STORE_LIST_QUERY : "SELECT store_id, store_name, store_address, store_code, created_on, created_by FROM book.store;",
    CREATE_STORE_QUERY : "INSERT INTO book.store (store_id, store_name, store_address, store_code, created_on, created_by) VALUES(nextval('book.store_store_id_seq'::regclass), $1, $2, $3, CURRENT_TIMESTAMP, $4);",
    UPDATE_STORE_QUERY : "UPDATE book.store SET store_name=$1, store_address=$2, store_code=$3, created_by=$4 WHERE store_id=$5;",
    DELETE_STORE_QUERY : "DELETE FROM book.store WHERE store_id=$1;",
    GET_SIGNLE_STORE : "SELECT store_id, store_name, store_address, store_code, created_on, created_by FROM book.store WHERE store_id = $1;",
    GET_BOOK_LIST_QUERY: "SELECT book_id, book_title, book_description, book_author, book_publisher, book_pages, created_on, created_by, store_code FROM book.book;",
    GET_SIGNLE_BOOK: "SELECT book_id, book_title, book_description, book_author, book_publisher, book_pages, created_on, created_by, store_code FROM book.book WHERE book_id = $1;",
    CREATE_BOOK_QUERY:"INSERT INTO book.book (book_id, book_title, book_description, book_author, book_publisher, book_pages, created_on, created_by, store_code) VALUES(nextval('book.book_book_id_seq'::regclass), $1, $2, $3, $4, $5, CURRENT_TIMESTAMP, $6, $7);",
    UPDATE_BOOK_QUERY:"UPDATE book.book SET book_title=$1, book_description=$2, book_author=$3, book_publisher=$4, book_pages=$5, created_by=$6, store_code=$7 WHERE book_id=$8;",
    DELETE_BOOK_QUERY:"DELETE FROM book.book WHERE book_id=$1;"
}


module.exports = queryList