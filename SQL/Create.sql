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
       (4, 'Date', 0.2),
       (5, 'Elderberry', 0.4),
       (6, 'Fig', 0.3),
       (7, 'Grape', 0.2),
       (8, 'Honeydew', 0.1),
       (9, 'Ice Cream', 1.0),
       (10, 'Jalapeno', 0.5),
       (11, 'Kiwi', 0.3),
       (12, 'Lemon', 0.1),
       (13, 'Mango', 0.2),
       (14, 'Nectarine', 0.4),
       (15, 'Orange', 0.3),
       (16, 'Peach', 0.2),
       (17, 'Quince', 0.1),
       (18, 'Raspberry', 0.4),
       (19, 'Strawberry', 0.3),
       (20, 'Tomato', 0.2),
       (21, 'Ugli', 0.1),
       (22, 'Vanilla', 0.4),
       (23, 'Watermelon', 0.3),
       (24, 'Ximenia', 0.2),
       (25, 'Yam', 0.1),
       (26, 'Zucchini', 0.4),
       (27, 'Apple', 0.5),
       (28, 'Banana', 0.3),
       (29, 'Cherry', 0.1),
       (30, 'Date', 0.2),
       (31, 'Elderberry', 0.4),
       (32, 'Fig', 0.3),
       (33, 'Grape', 0.2),
       (34, 'Honeydew', 0.1),
       (35, 'Ice Cream', 1.0),
       (36, 'Jalapeno', 0.5),
       (37, 'Kiwi', 0.3),
       (38, 'Lemon', 0.1)

-- Alternate way:


INSERT INTO products (id, name, price)
VALUE (,,,)

