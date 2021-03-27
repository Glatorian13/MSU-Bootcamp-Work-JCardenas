CREATE DATABASE IF NOT EXISTS wishes_db;

USE wishes_db;

CREATE TABLE wishes (
    `id` INT AUTO_INCREMENT NOT NULL,
    `wish` VARCHAR(120),
    PRIMARY KEY (`id`)
);

INSERT INTO wishes (`wish`);
VALUES ("learn mysql better!");