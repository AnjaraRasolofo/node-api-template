const dotenv = require("dotenv");
const { AppDataSource } = require("./src/data-source");
const app = require("./src/app.js");


dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});