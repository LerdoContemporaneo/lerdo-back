import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Alumnos from "./AlumnosModel.js"; 

const { DataTypes } = Sequelize;

const Tareas = db.define("tareas",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    fechaAsignacion: { 
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: () => new Date().toISOString().slice(0, 10),
    },
    fechaEntrega: { 
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
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


Alumnos.hasMany(Tareas);
Tareas.belongsTo(Alumnos, { foreignKey: "alumnoId" });



export default Tareas;