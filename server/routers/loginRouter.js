const express = require('express');
const loginRouter = express.Router();

const Login = require('../data/loginModule');
const User = require('../data/userModel');
const CryptoJS = require('crypto-js');

loginRouter.post('/', (req, res) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return res.status(400).json({ error: 'All fields are required' });
	}

	const md5Hash = CryptoJS.MD5(req.body.password);
	const userHashedPassword = md5Hash.toString();

	User.getUser(username)
		.then((user) => {
			const invalidCredentials = (!user || user.password != userHashedPassword ) 
			if (invalidCredentials) return res.status(403).json({ error: "Invalid username or password"})

			if (user.password === userHashedPassword) {
				Login.signIn(user.id)
					.then((sessionId) => {
						const oneDayToSeconds = 24 * 60 * 60;
						res.cookie('userId', user.id, {
							maxAge: oneDayToSeconds,
							httpOnly: true
						});
						return res.status(201).json({ userId: user.id });
					})
					.catch((err) => {
						return res.status(500).json({ error: 'server error' });
					});
				}
		})
		.catch((err) => {
			return res.status(500).json({ error: 'Server Error' });
		});
});

module.exports = loginRouter;
