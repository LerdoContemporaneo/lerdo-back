import { Sequelize } from "sequelize";
import db from "../config/db.js";

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
        isInt: true,
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

    export default Reportes;