const userService = require('../services/userService');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    await userService.signup(email, password);
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
