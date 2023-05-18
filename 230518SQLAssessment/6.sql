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