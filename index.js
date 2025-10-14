import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/db.js";
import SequelizeStore from "connect-session-sequelize";

import UserRoute from "./routes/UserRoute.js";
import AlumnoRoute from "./routes/AlumnoRoute.js";
import AsistenciaMaestroRoute from "./routes/AsistenciaMaestroRoute.js";
import AsistenciaRoute from "./routes/AsistenciaRoute.js";
import GradosRoute from "./routes/GradosRoute.js";
import IncidenciaRoute from "./routes/IncidenciaRoute.js";
import ReportesRoute from "./routes/ReportesRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import TareaRoute from "./routes/TareaRoute.js";

import "./models/index.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();


const SequelizeSessionStore = SequelizeStore(session.Store);
const store = new SequelizeSessionStore({
  db: db,
  tableName: "Sessions",
});


app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());


app.use(UserRoute);
app.use(AlumnoRoute);
app.use(AsistenciaMaestroRoute);
app.use(AsistenciaRoute);
app.use(GradosRoute);
app.use(IncidenciaRoute);
app.use(ReportesRoute);
app.use(AuthRoute);
app.use(TareaRoute);


(async () => {
  try {
    await db.authenticate();
    console.log("✅ Conexión a MySQL exitosa");

    // Sincronizar tus modelos
    await db.sync({ alter: true });
    console.log("✅ Tablas sincronizadas correctamente");

   
    await store.sync();
    console.log("✅ Tabla de sesiones creada o verificada");

    console.log("📋 Modelos detectados:", Object.keys(db.models));
  } catch (error) {
    console.error("❌ Error al conectar o sincronizar:", error);
  }
})();

const PORT = process.env.PORT || 3000;
export default app;