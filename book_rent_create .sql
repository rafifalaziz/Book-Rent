-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2022-07-28 07:18:39.052

-- tables
-- Table: BOOK
CREATE TABLE BOOK (
    BOOK_ID int NOT NULL AUTO_INCREMENT,
    TITLE varchar(255) NOT NULL,
    AUTHOR varchar(100) NOT NULL,
    STOCK int NOT NULL,
    CONSTRAINT BOOK_pk PRIMARY KEY (BOOK_ID)
);

-- Table: BORROW
CREATE TABLE BORROW (
    BORROW_ID int NOT NULL AUTO_INCREMENT,
    BOOK_BOOK_ID int NOT NULL,
    MEMBER_MEMBER_ID int NOT NULL,
    TIME timestamp NOT NULL,
    RETURNED bool NULL,
    CONSTRAINT BORROW_pk PRIMARY KEY (BORROW_ID)
);

-- Table: MEMBER
CREATE TABLE MEMBER (
    MEMBER_ID int NOT NULL AUTO_INCREMENT,
    NAME varchar(100) NOT NULL,
    PENALIZE timestamp NULL,
    CONSTRAINT MEMBER_pk PRIMARY KEY (MEMBER_ID)
);

-- foreign keys
-- Reference: BORROW_BOOK (table: BORROW)
ALTER TABLE BORROW ADD CONSTRAINT BORROW_BOOK FOREIGN KEY BORROW_BOOK (BOOK_BOOK_ID)
    REFERENCES BOOK (BOOK_ID);

-- Reference: BORROW_MEMBER (table: BORROW)
ALTER TABLE BORROW ADD CONSTRAINT BORROW_MEMBER FOREIGN KEY BORROW_MEMBER (MEMBER_MEMBER_ID)
    REFERENCES MEMBER (MEMBER_ID);

-- End of file.

