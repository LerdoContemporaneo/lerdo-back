import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Alumnos from "./AlumnosModel.js";


const { DataTypes } = Sequelize;

const Incidencia = db.define( "incidencia", {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tipo:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    descripcion:{
            type: DataTypes.TEXT,
            allowNull: false,
        },  
    fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
       alumnoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Alumnos.hasMany(Incidencia);
Incidencia.belongsTo(Alumnos, { foreignKey: "alumnoId" });   


    export default Incidencia;