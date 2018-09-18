SELECT EXISTS (SELECT username FROM users WHERE username = lower(${string}))
