//models/index.js
import db from "../config/db.js";
import Users from "./UserModel.js";
import Alumnos from "./AlumnosModel.js";
import Grados from "./GradosModel.js";
import Asistencia from "./AsistenciaModel.js";
import AsistenciaMaestro from "./AsistenciaMaestro.js";
import Incidencia  from "./IncidenciaModel.js";
import Reportes from "./ReportesModel.js";
import Tareas from "./TareasModel.js";
// relaciones faltantes

Alumnos.hasMany(Incidencia,{foreignKey:"alumnosId"});
Incidencia.belongsTo(Alumnos, { foreignKey: "alumnoId" }); 

 Alumnos.hasMany(Reportes, { foreignKey: "alumnoId" });
Reportes.belongsTo(Alumnos, { foreignKey: "alumnoId" });

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
     Tareas
}
export default db;