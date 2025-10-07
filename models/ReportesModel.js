import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Alumnos from "./AlumnosModel.js";


const { DataTypes } = Sequelize;

const Reportes = db.define( "reportes", {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    titulo:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    contenido:{
            type: DataTypes.TEXT,
            allowNull: false,
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

Alumnos.hasMany(Reportes);
Reportes.belongsTo(Alumnos, { foreignKey: "alumnoId" });   


    export default Reportes;