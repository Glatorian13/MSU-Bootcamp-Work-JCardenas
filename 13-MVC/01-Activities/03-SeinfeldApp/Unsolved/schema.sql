/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database seinfeld and specified it for use.
CREATE DATABASE seinfeld;
USE seinfeld;

-- Create the table actors.
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points int NOT NULL,
  attitude varchar(60) NOT NULL,
  PRIMARY KEY(id)
);

