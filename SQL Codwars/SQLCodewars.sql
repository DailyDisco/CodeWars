-- SQL Basics: Simple WHERE and ORDER BY 8 Kyu SQL
-- Create your SELECT statement here
SELECT id, name, age
FROM people
WHERE age > 50 
ORDER BY age DESC

-- SQL Grasshopper: Select Columns 8 Kyu SQL
-- Type your SQL here
SELECT custid, custname, custstate
FROM customers

-- Adults only (SQL for Beginners #1) 8 kyu SQL
--Your code here
SELECT name, age
FROM users
WHERE age >= 18

-- Easy SQL: Rounding Decimals 8 Kyu SQL
-- cast floor and ceiling to round the decimals up and down and return them as alias
SELECT floor(number1) AS number1, ceiling(number2) AS number2
FROM decimals;

-- SQL Basics: Simple SUM 8 Kyu SQL
-- Create your SELECT statement here
SELECT SUM(age) as age_sum
FROM people

-- Collect Tuition (SQL for Beginners #4) 8 Kyu SQL
-- Your Code Here
SELECT * FROM students
WHERE tuition_received = False;