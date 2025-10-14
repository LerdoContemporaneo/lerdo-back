import db from "../config/db.js";

import Users from "./UserModel.js";
import Alumnos from "./AlumnosModel.js";
import Grados from "./GradosModel.js";
import Asistencia from "./AsistenciaModel.js";
import AsistenciaMaestro from "./AsistenciaMaestroModel.js"; // ✅ nombre corregido
import Incidencia from "./IncidenciaModel.js";
import Reportes from "./ReportesModel.js";
import Tareas from "./TareasModel.js";

// Relaciones

// Usuarios ↔ Grados
Users.hasMany(Grados, { foreignKey: "maestroId" });
Grados.belongsTo(Users, { foreignKey: "maestroId" });

// Grados ↔ Alumnos
Grados.hasMany(Alumnos, { foreignKey: "gradoId" });
Alumnos.belongsTo(Grados, { foreignKey: "gradoId" });

// Usuarios ↔ AsistenciaMaestro
Users.hasMany(AsistenciaMaestro, { foreignKey: "maestroId" });
AsistenciaMaestro.belongsTo(Users, { foreignKey: "maestroId" });

// Alumnos ↔ Asistencia
Alumnos.hasMany(Asistencia, { foreignKey: "alumnoId" });
Asistencia.belongsTo(Alumnos, { foreignKey: "alumnoId" });

// Alumnos ↔ Incidencia
Alumnos.hasMany(Incidencia, { foreignKey: "alumnoId" });
Incidencia.belongsTo(Alumnos, { foreignKey: "alumnoId" });

// Alumnos ↔ Reportes
Alumnos.hasMany(Reportes, { foreignKey: "alumnoId" });
Reportes.belongsTo(Alumnos, { foreignKey: "alumnoId" });

// Alumnos ↔ Tareas
Alumnos.hasMany(Tareas, { foreignKey: "alumnoId" });
Tareas.belongsTo(Alumnos, { foreignKey: "alumnoId" });

export {
  Users,
  Alumnos,
  Grados,
  Asistencia,
  AsistenciaMaestro,
  Incidencia,
  Reportes,
  Tareas,
};

export default db;