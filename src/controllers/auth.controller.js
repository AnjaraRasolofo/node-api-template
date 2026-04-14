const { registerUser, loginUser } = require("../services/auth.service");
const { generateToken } = require("../utils/generateToken");

const register = async (req, res) => {
  try {
    const user = await registerUser(req.body.email, req.body.password);
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await loginUser(req.body.email, req.body.password);
    const token = generateToken(user);

    res.json({ token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = {
  register,
  login
};