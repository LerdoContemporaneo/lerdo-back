import { Sequelize } from "sequelize";
import mysql2 from "mysql2"; // 👈 Importación del módulo real
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: mysql2, // 👈 Aquí va el módulo importado, no una cadena
    logging: false,
  }
);

export default db;