SELECT email_domain, COUNT (email_domain)
FROM users
	WHERE email_domain LIKE "%.edu"
	GROUP BY 1
	ORDER BY 2 DESC
	LIMIT 25
