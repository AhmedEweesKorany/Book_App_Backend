-- book.store definition

-- Drop table

-- DROP TABLE book.store;

CREATE TABLE book.store (
	store_id serial4 NOT NULL,
	store_name varchar(100) NOT NULL,
	store_address varchar(100) NULL,
	store_code int4 NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	CONSTRAINT store_pk PRIMARY KEY (store_id)
);