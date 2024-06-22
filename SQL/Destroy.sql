-- SQL Schema:

CREATE TABLE products (
	id INT NOT NULL,
  	name STRING,
  	price MONEY,
  PRIMARY KEY (id)
)


DELETE FROM products WHERE id=1;