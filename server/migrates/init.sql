CREATE DATABASE miori
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'en_US.UTF-8'
       LC_CTYPE = 'en_US.UTF-8'
       CONNECTION LIMIT = -1;


CREATE TABLE public.category
(
  id integer NOT NULL,
  code character varying(50) NOT NULL,
  name character varying(100) NOT NULL,
  description text,
  CONSTRAINT category_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.category
  OWNER TO postgres;

INSERT INTO category VALUES(1, 'CA0001', 'Sample category A', 'This is a description');