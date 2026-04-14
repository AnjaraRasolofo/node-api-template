const bcrypt = require("bcrypt");
const { AppDataSource } = require("../data-source");

const userRepo = AppDataSource.getRepository("User");

const registerUser = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userRepo.save({
    email,
    password: hashedPassword
  });
};

const loginUser = async (email, password) => {
  
  const user = await userRepo.findOneBy({
    email: "test@mail.com"
  });

  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid password");

  return user;
};

module.exports = {
  registerUser,
  loginUser
};