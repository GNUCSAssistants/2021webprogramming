CREATE TABLE `ordered` (
    `order_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `menu_name` TEXT NOT NULL,
    `quantity` INT NOT NULL,
    `address` TEXT NOT NULL,
    `what_time` TEXT NOT NULL,
    `etc` TEXT
);

INSERT INTO `ordered`
(`menu_name`, `quantity`, `address`, `what_time`, `etc`)
VALUES
('특제 바몬드 카레', 2, '제주시 애월읍', '11:00AM', '안 맵게 해주세요'),
('샌드위치', 1, '경남 함양군', '12:00PM', '오이 빼주세요'),
('해물 스파게티', 3, '경상대 기숙사 8동', '01:00PM', NULL);
