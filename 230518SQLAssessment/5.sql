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
