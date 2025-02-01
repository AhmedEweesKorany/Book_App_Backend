-- app_audit
CREATE TABLE book.app_audit (
	audit_id serial NOT NULL,
	audit_action varchar(100) NOT NULL,
	audit_data json NULL,
	audit_by varchar(50) NOT NULL,
	audit_on timestamp NOT NULL,
	audit_status varchar(50) NULL,
	audit_error json NULL,
	CONSTRAINT app_audit_pkey PRIMARY KEY (audit_id)
);