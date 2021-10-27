CREATE TABLE `person` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT NOT NULL,
    `address` TEXT NOT NULL
);
INSERT INTO `person` (`name`, `address`)
VALUES ('조교행님', '경남 진주시'),
    ('전인혁', '목포시'),
    ('황승현', '마산시');