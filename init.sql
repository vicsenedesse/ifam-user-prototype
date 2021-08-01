CREATE DATABASE IF NOT EXISTS dbuser;
USE dbuser;


CREATE TABLE user (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(50) NOT NULL,
  login VARCHAR(30) NOT NULL,
  password VARCHAR(20) NOT NULL,
  email VARCHAR(40) NOT NULL,

  PRIMARY KEY (id)
  
  );



-- INSERT INTO dbclinic.tutor
INSERT INTO user(id, name, login, password, email) 
VALUES (1,'Raphaela Goes','rapha.goes','s3nh4','email1@email.com');

INSERT INTO user(id, name, login, password, email) 
VALUES (2,'Rodrigo Carvalho','rodrigo.carvalho','s3nh4','email2@email.com');

INSERT INTO user(id, name, login, password, email) 
VALUES (3,'Victoria Senedesse','victoria.senedesse','s3nh4','email3@email.com');
