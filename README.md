# MVC Shopping Site (Node.js + MySQL)

This simple project demonstrates a basic MVC structure using Node.js, Express, EJS, HTML, CSS, and MySQL.

## Prerequisites

- Node.js (LTS)
- [Laragon](https://laragon.org/) (for local MySQL server and GUI)

Laragon runs MySQL on `127.0.0.1:3306` with `root` user and no password by default.

## Setup

1. Start Laragon and ensure that MySQL service is running (green indicator). **If you see an error like "Unknown database 'banhang'", create the database now:**
   
   ```sql
   CREATE DATABASE banhang;
   ```
   
   You can also modify `src/db.js` to point to a different database name.
2. Create a `products` table, for example:

   ```sql
   CREATE TABLE banhang.products (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     price DECIMAL(10,2) NOT NULL
   );
   ```

3. Insert some sample data:

   ```sql
   INSERT INTO banhang.products (name, price) VALUES
   ('Apple', 0.99),
   ('Banana', 0.59);
   ```

4. In the project folder run:
   ```bash
   npm install
   npm start
   ```

5. Visit `http://localhost:3000` to see the product list pulled from MySQL.

## Code structure

- `app.js` - main Express application
- `src/routes/home.js` - home controller; queries database
- `src/db.js` - connection pool using `mysql2/promise`
- `src/views` - EJS templates
- `public/css` - static assets

Feel free to expand with models, additional routes, and business logic.
