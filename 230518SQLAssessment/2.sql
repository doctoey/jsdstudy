SELECT count(*)
FROM users
	WHERE City LIKE "New York"
	AND email_domain LIKE "%.edu"