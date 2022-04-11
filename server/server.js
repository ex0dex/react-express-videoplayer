const colors = require("colors");
require("dotenv").config({ path: "../.env" });
const PORT = process.env.PORT || 8000;
const express = require("express");
const router = require("./routers/index.router");
const sequelize = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use("/videos/", express.static("./videos/"));

const boost = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    app.listen(PORT, () => {
      console.log(
        colors.bgCyan.black(
          `Server is running on port ${PORT}\nDatabase connected to ${process.env.DB_HOST}, port ${process.env.DB_PORT}`
        )
      );
    });
  } catch (error) {
    console.error(`server filed on ${PORT}`, error);
  }
};
boost(); 
