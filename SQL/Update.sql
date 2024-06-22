-- SQL Schema:

CREATE TABLE products (
	id INT NOT NULL,
  	name STRING,
  	price MONEY,
  PRIMARY KEY (id)
)

-- Updating a element in the table
UPDATE products
SET price = 0.6
WHERE id = 1;

-- Adding a column/Alter table:

ALTER TABLE products
ADD quantity INT;