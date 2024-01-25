import { Sequelize } from "sequelize";

const sequelize = new Sequelize("NODE", "root", "1234", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
});

// try {
//   await sequelize.authenticate();
//   console.log("Connection successful");
// } catch (err) {
//   console.log("Connection failed");
// }

export default sequelize;
