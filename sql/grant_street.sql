SELECT employee.dept_id, COUNT(emp_name), SUM(salary) FROM employee
JOIN department ON employee.dept_id = department.dept_id
GROUP BY employee.dept_id
ORDER BY employee.dept_id ASC;
