import { Sequelize } from "sequelize";
import db from "../config/db.js"

const { DataTypes } = Sequelize;

const Users = db.define('users', {
          uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
         type: DataTypes.STRING, 
         allowNull: false, 
         },
    email: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        validate: {
            notEmpty: true,
            isEmail: true
        }
     },
    password: { 
        type: DataTypes.STRING,
         allowNull: false 
        },
  role: {
    type: DataTypes.ENUM('administrador', 'maestro', 'alumno'),
    allowNull: false,
  },
    }, {
        freezeTableName: true
    });   
     
 export default Users;