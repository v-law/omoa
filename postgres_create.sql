--
-- PostgreSQL database dump
--
-- psql -d <url from elephantSQL> -f postgres_create.sql

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.art (
	"_id" serial NOT NULL,
	"title" varchar NOT NULL,
	"primaryImage" varchar NOT NULL,
	"primaryImageSmall" varchar,
	"culture" varchar,
	"period" varchar,
	"artistDisplayName" varchar,
  "artistDisplayBio" varchar,
  "medium" varchar,
  "dimensions" varchar,
	"objectID" bigint,
	CONSTRAINT "art_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.exhibit (
	"_id" serial NOT NULL,
	"row" integer NOT NULL,
	"column" integer NOT NULL,
	"art_id" bigint,
	CONSTRAINT "exhibit_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.exhibit ADD CONSTRAINT "art_fk0" FOREIGN KEY ("art_id") REFERENCES public.art("_id");

 INSERT INTO public.exhibit VALUES (1, 1, 1, NULL);
 INSERT INTO public.exhibit VALUES (2, 1, 2, NULL);
 INSERT INTO public.exhibit VALUES (3, 1, 3, NULL);
 INSERT INTO public.exhibit VALUES (4, 2, 1, NULL);
 INSERT INTO public.exhibit VALUES (5, 2, 2, NULL);
 INSERT INTO public.exhibit VALUES (6, 2, 3, NULL);
 INSERT INTO public.exhibit VALUES (7, 3, 1, NULL);
 INSERT INTO public.exhibit VALUES (8, 3, 2, NULL);
 INSERT INTO public.exhibit VALUES (9, 3, 3, NULL);

select setval('public.art__id_seq', 1, false);
select setval('public.exhibit__id_seq', 10, false);