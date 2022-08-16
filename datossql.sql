CREATE DATABASE USUARIOS_LINKS;
USE USUARIOS_LINKS;

CREATE TABLE USERS(
	id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT ,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);
DESCRIBE USERS;

CREATE TABLE LINKS (
	id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) references users(id)
);

DESCRIBE LINKS;

INSERT INTO users (username,password,fullname) VALUES (
	"Javi292820",
    "tuvaquita2022",
    "Javier Pinola"
);

select * from links;