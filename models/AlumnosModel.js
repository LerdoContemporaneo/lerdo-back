import { Sequelize } from "sequelize";
import db from "../config/db.js"



const { DataTypes } = Sequelize;

const Alumnos = db.define('alumnos', {
          uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    nombre:{
         type: DataTypes.STRING,
         allowNull: false,
        },
    apellido: { type: DataTypes.STRING,
         allowNull: false,
        },
        matricula:
         { type: DataTypes.STRING,
         allowNull: false,
         unique: true
        },

        tutor:{
            type: DataTypes.STRING,
            allowNull: false
            },

            gradoId:{
            type: DataTypes.INTEGER,
            allowNull: false,
           
            validate: {
            notEmpty: true
        }
            },
         
            
             

         
}, {
            freezeTableName: true,
             timestamps: true,
        });


       

        export default  Alumnos;
        
        