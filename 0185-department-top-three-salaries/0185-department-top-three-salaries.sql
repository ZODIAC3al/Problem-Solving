/* Write your T-SQL query statement below */
-- select Rank () over (partition by d.name order by e.salary desc) dep_rank ,d.name 'Department',e.name 'Employee',e.salary 'Salary' where Employee e join Department d on e.departmentId=d.departmentId where dep_rank<=3

SELECT
    ranked_employees.Department AS Department,
    ranked_employees.Employee AS Employee,
    ranked_employees.Salary AS Salary
FROM (
    SELECT
        e.name AS Employee,
        e.salary AS Salary,
        d.name AS Department,
        DENSE_RANK() OVER (PARTITION BY d.name ORDER BY e.salary DESC) AS dep_rank
    FROM
        Employee e
    JOIN
        Department d ON e.departmentId = d.id
) ranked_employees
WHERE
    ranked_employees.dep_rank <= 3;


