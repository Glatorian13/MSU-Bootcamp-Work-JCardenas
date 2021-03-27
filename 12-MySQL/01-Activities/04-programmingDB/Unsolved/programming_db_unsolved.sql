-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
`id` int not null auto_increment,
  -- Create a string column called "language" --
`language` varchar(100), 
  -- Create an integer column called "rating" --
`rating` int(10) default null,
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
`mastered` boolean default true,
  -- Set the id as this table's primary key
  primary key (`id`)
);

-- Create new example rows

insert into `programming_db`.`programming_languages` (language, mastered)
vaules (`"JavaScript"`, `false`);

