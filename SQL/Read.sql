-- SQL Schema:

CREATE TABLE products (
	id INT NOT NULL,
  	name STRING,
  	price MONEY,
  PRIMARY KEY (id)
)


SELECT name,price from products;

-- Alternate way:

SELECT * from products;


-- or:

SELECT * FROM products where id=1;