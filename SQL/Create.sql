-- SQL Schema:

CREATE TABLE products (
	id INT NOT NULL,
  	name STRING,
  	price MONEY,
  PRIMARY KEY (id)
)


-- SQL Insert:

INSERT INTO products
VALUES (1, 'Apple', 0.5),
       (2, 'Banana', 0.3),
       (3, 'Cherry', 0.1),
       (4, 'Date', 0.2)

-- Alternate way:


INSERT INTO products (id, name, price)
VALUE (,,,)

