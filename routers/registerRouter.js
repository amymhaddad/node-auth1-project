const express = require('express');
const registerRouter = express.Router();

const User = require('../data/userModel');
const CryptoJS = require('crypto-js');

registerRouter.post('/', (req, res) => {
	const md5Hash = CryptoJS.MD5(req.body.password);
	const userHashedPassword = md5Hash.toString();

	const newUser = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		age: req.body.age,
		username: req.body.username,
		password: userHashedPassword
	};

	const { first_name, last_name, age, username, password } = req.body;
	if (!first_name || !last_name || !age || !password || !username) {
		return res.status(400).json({ error: 'All fields are required' });
	}

	User.addNewUser(newUser)
		.then((user) => {
			res.status(201).json(newUser);
		})
		.catch((err) => {
			return res.status(500).json({ error: 'Server Error' });
		});
});

module.exports = registerRouter;
