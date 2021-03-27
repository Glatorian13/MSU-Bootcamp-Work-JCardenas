-- Makes it so all of the following code will affect animals_db --
USE animals_db;
DROP TABLE IF EXISTS PEOPLE;
CREATE TABLE `people` (
  `name` varchar(255) NOT NULL,
  `has_pet` tinyint(1) NOT NULL,
  `pet_name` char(10) DEFAULT NULL,
  `pet_age` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `animals_db`.`people`
VALUES ('Ahmed', '1', 'Rockington', '100');
INSERT INTO `animals_db`.`people`
VALUES ('Mary', '1', 'Little', '2');
INSERT INTO `animals_db`.`people`
VALUES ('Mary', '1', 'Little', '2');
INSERT INTO `animals_db`.`people`
VALUES ('Peter', '1', 'lamb', '3');
INSERT INTO `animals_db`.`people` (name, has_pet)
VALUES ('Jacob',false);