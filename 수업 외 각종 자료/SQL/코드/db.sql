-- test라는 이름의 DB 생성
CREATE DATABASE test;

-- test 라는 DB 사용
use test;


-- CREATE TABLE

CREATE TABLE `person` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(20) NOT NULL,
    `like` TEXT,
    `date-of-birth` DATE
);


-- INSERT INTO

INSERT INTO `person`
(`name`, `like`, `date-of-birth`)
VALUES 
('조교행님', '짜장면', '1993-03-21');

INSERT INTO `person`
(`name`, `date-of-birth`)
VALUES 
('수지니', '2000-02-15');

INSERT INTO `person`
(`name`, `like`, `date-of-birth`)
VALUES 
('난 너의 수호천사', '스시', '2018-11-11');


-- UPDATE

UPDATE person 
SET 
	name = '야호'
WHERE 
	id = 4;


-- DELETE

DELETE FROM person WHERE id = 4;


-- DROP TABLE

DROP TABLE person;


-- DROP DATABASE
DROP DATABASE test;


-- SELECT

SELECT * FROM person;
SELECT name, `like` FROM person;
SELECT * FROM person WHERE id > 1;
SELECT * FROM person WHERE id = 1;
SELECT * FROM person ORDER BY id;
SELECT name, `like` FROM person WHERE id > 1;
