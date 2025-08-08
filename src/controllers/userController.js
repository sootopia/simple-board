const userService = require('../services/userService');

exports.signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    await userService.signup(email, password, name);
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await userService.login(email, password);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
