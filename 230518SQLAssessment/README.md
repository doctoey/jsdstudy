# Relational Database Assessment
## Generation Thailand
1. What are the Top 25 schools (<b>.edu</b> domains)?
```sql
SELECT email_domain, COUNT (email_domain)
FROM users
	WHERE email_domain LIKE "%.edu"
	GROUP BY 1
	ORDER BY 2 DESC
	LIMIT 25

```
2. How many <b>.edu</b> learners are located in New York?
```sql
SELECT count(*)
FROM users
	WHERE City LIKE "New York"
	AND email_domain LIKE "%.edu"
```
3. The `mobile_app` column contains either `mobile-user` or `NULL`. How many of these Codecademy learners are using the mobile app?
```sql
SELECT count(*)
FROM users
	WHERE mobile_app = "mobile-user"
```
4. Query for the sign-up counts for each hour 
```sql
SELECT strftime("%H", sign_up_at) AS TimeHour , COUNT(*) AS hour
FROM users
GROUP BY TimeHour
ORDER BY hour DESC
```
5. Do different schools (<b>.edu</b> domains) prefer different courses?
```sql
SELECT
  users.email_domain AS Email,
  COUNT(*) AS StudentNum,
  SUM(CASE WHEN progress.learn_cpp != '' THEN 1 ELSE 0 END) AS CppNum,
  SUM(CASE WHEN progress.learn_sql != '' THEN 1 ELSE 0 END) AS SqlNum,
  SUM(CASE WHEN progress.learn_html != '' THEN 1 ELSE 0 END) AS HtmlNum,
  SUM(CASE WHEN progress.learn_javascript != '' THEN 1 ELSE 0 END) AS JavascriptNum,
  SUM(CASE WHEN progress.learn_java != '' THEN 1 ELSE 0 END) AS JavaNum,
  CASE WHEN SUM(
        CASE WHEN TRIM(progress.learn_cpp) != '' THEN 1 ELSE 0 END +
        CASE WHEN TRIM(progress.learn_sql) != '' THEN 1 ELSE 0 END +
        CASE WHEN TRIM(progress.learn_html) != '' THEN 1 ELSE 0 END +
        CASE WHEN TRIM(progress.learn_javascript) != '' THEN 1 ELSE 0 END +
        CASE WHEN TRIM(progress.learn_java) != '' THEN 1 ELSE 0 END
    ) > 0 THEN 'Yes' ELSE 'No' END AS DifferentCourse
FROM users
JOIN progress ON users.user_id = progress.user_id
GROUP BY users.email_domain
ORDER BY StudentNum;

```
6. What courses are the New Yorkers students taking?
```sql
SELECT
  learn_cpp,
  learn_html,
  learn_java,
  learn_javascript,
  learn_sql,
  COUNT(*) AS num_students
FROM progress
JOIN users ON progress.user_id = users.user_id
WHERE users.city = 'New York'
GROUP BY   learn_cpp,
  learn_html,
  learn_java,
  learn_javascript,
  learn_sql
ORDER BY num_students DESC;
```
7. What courses are the Chicago students taking?
```sql
SELECT
  learn_cpp,
  learn_html,
  learn_java,
  learn_javascript,
  learn_sql,
  COUNT(*) AS num_students
FROM progress
JOIN users ON progress.user_id = users.user_id
WHERE users.city = 'Chicago'
GROUP BY   learn_cpp,
  learn_html,
  learn_java,
  learn_javascript,
  learn_sql
ORDER BY num_students DESC;
```
