CREATE TABLE users (
    id text PRIMARY KEY,
    email text,
    created_at TIMESTAMP DEFAULT NOW(),
    deleted BOOLEAN DEFAULT FALSE
);

CREATE TABLE sales (
    id INT GENERATED ALWAYS AS IDENTITY,
    country TEXT,
    total_sales DECIMAL
);