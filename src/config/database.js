import Sequelize from "sequelize";
import dotenv from "dotenv";

// const sequelize = new Sequelize("postgres", "postulante", "solucionatica2022", {
//   host: "reclutamiento-instance-1.cgcdn4lykdst.us-east-1.rds.amazonaws.com",
//   dialect: "postgres",
// });

dotenv.config();

const hostname = process.env.HOSTNAME || "localhost";
const username = process.env.DBUSER || "postgres";
const password = process.env.PASSWORD || "123";
const database = process.env.DATABASE || "postgres";
const dialect = process.env.DIALECT || "postgres";
const port = process.env.DBPORT || 5433;

const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  dialect: dialect,
  port: port,
});

export default sequelize;
