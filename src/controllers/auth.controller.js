import { registerUser, loginUser } from "../services/auth.service.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body.email, req.body.password);
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await loginUser(req.body.email, req.body.password);
    const token = generateToken(user);

    res.json({ token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};