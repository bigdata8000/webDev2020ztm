
video 26 - database: postgreSQL.
--------------------------------------

gui:
www.psequel.com


terminal:
! check for updates on: brew.
brew update

!and check if everything is ok. 
brew doctor

! now install postgresql.
brew install postgresql

! to run the programme.
brew services start postgresql

! to stop the programme.
brew stop services postgresql


--------------------------------------

! create database called: happy
createdb happy
createdb test

! connect to this db
psql happy
psql test

! create table
CREATE TABLE users (name text, age smallint, birthday date);

! check if table is created / show all tables.
\d

! to quit psql
\q



--------------------------------------

! use psequel:      // or pgAdmin:  https://www.postgresql.org/ftp/pgadmin/pgadmin4/v4.21/macos/

host: localhost
port: 5432
user:
password:
database: happy

--------------------------------------
video 26.6 - Insert into & Select.
--------------------------------------

INSERT INTO users (name, age, birthday) VALUES ('Andrei', 31, '1930-01-25');
INSERT INTO users (name, age, birthday) VALUES ('Honey', 21, '1979-12-25');
INSERT INTO users (name, age, birthday) VALUES ('Mary', 25, '1985-01-30');
INSERT INTO users (name, age, birthday) VALUES ('Amy', 22, '1999-08-28');

SELECT * FROM users;

--------------------------------------

ALTER TABLE users ADD score smallint;


UPDATE users SET score = 50 WHERE name = 'Andrei';
UPDATE users SET score = 99 WHERE name = 'Mary';
UPDATE users SET score = 77 WHERE name = 'Honey';
UPDATE users SET score = 61 WHERE name='Honey' OR name='Andrei';
UPDATE users SET score = 89 WHERE name = 'Amy';

SELECT * FROM users;


--------------------------------------
video 26.8 - Conditional Selection.
--------------------------------------

SELECT * FROM users WHERE name LIKE 'A%';

SELECT * FROM users WHERE name LIKE 'a%';

SELECT * FROM users WHERE name LIKE '%y';

SELECT * FROM users ORDER BY score DESC;



--------------------------------------
video 26.9 - Functions.
--------------------------------------

SELECT AVG(score) FROM users;

SELECT SUM(age) FROM users;

SELECT COUNT(name) FROM users;



--------------------------------------
video 26.10 - Joining Tables - p1.
--------------------------------------

CREATE TABLE login (
    ID serial NOT NULL PRIMARY KEY,
    secret VARCHAR (100) NOT NULL,
    name text UNIQUE NOT NULL
);


INSERT INTO login (secret, name) VALUES ('abcsecret', 'Andrei');
INSERT INTO login (secret, name) VALUES ('fatPizza', 'Honey');
INSERT INTO login (secret, name) VALUES ('xyz', 'Mary');
INSERT INTO login (secret, name) VALUES ('noSugar', 'Amy');


SELECT * FROM login;



--------------------------------------
video 26.11 - Joining Tables - p2.
--------------------------------------


SELECT *
FROM users, login
WHERE users.name = login.name;



SELECT * FROM users JOIN login ON users.name = login.name;



--------------------------------------
video 26.12 - Delete.
--------------------------------------


DELETE FROM users WHERE name = 'amy';

DROP TABLE login;


--------------------------------------
