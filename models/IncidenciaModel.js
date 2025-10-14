import { Sequelize } from "sequelize";
import db from "../config/db.js";

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
            defaultValue: Sequelize.NOW
        },
       alumnoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isInt: true,
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

    export default Incidencia;