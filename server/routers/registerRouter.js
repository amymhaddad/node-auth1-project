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
	//See if user already exists in DB
	User.getUser(newUser.username)
		.then((user) => {
			if (user) return res.status(409).json({error: "User already exists"})
		.catch((err) => {
			return res.status(500).json({ error: err });
		});
			//IF new user, then add the user
	User.addNewUser(newUser)
		.then((user) => {
			return res.status(201).json(newUser);
		})
	})
		.catch((err) => {
			return res.status(500).json({ error: err });
		});
});

module.exports = registerRouter;