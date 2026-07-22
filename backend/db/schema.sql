CREATE TABLE users (
    id text PRIMARY KEY,
    name text
);

CREATE TABLE sales (
    id INT GENERATED ALWAYS AS IDENTITY,
    country TEXT,
    total_sales DECIMAL
);