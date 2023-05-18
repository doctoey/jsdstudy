SELECT strftime("%H", sign_up_at) AS TimeHour , COUNT(*) AS hour
FROM users
GROUP BY TimeHour
ORDER BY hour DESC