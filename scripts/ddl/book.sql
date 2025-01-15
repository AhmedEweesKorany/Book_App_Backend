-- book.book definition

-- Drop table

-- DROP TABLE book.book;

CREATE TABLE book.book (
	book_id serial4 NOT NULL,
	book_title varchar(300) NOT NULL,
	book_description varchar(1000) NULL,
	book_author varchar(50) NOT NULL,
	book_publisher varchar(50) NOT NULL,
	book_pages int4 NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	store_code varchar(5) NOT NULL,
	CONSTRAINT book_pk PRIMARY KEY (book_id)
);