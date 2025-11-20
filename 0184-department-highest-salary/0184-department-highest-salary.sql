/* Write your T-SQL query statement below */
-- select dense_rank () over (partition by d.name order by e.salary desc) as dep_rank , d.name 'Department',e.name ' Employee',e.salary 'Salary' from Employee e join Department d on e.departmentId=d.id where dep_rank=1

SELECT  Department, Employee, Salary
FROM (
    SELECT 
        DENSE_RANK() OVER (PARTITION BY d.name ORDER BY e.salary DESC) AS dep_rank,
        d.name AS Department,
        e.name AS Employee,
        e.salary AS Salary
    FROM Employee e
    JOIN Department d ON e.departmentId = d.id
) RankedEmployees
WHERE dep_rank = 1;
