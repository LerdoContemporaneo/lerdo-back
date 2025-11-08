import { Sequelize } from "sequelize";
import db from "../config/db.js"


const { DataTypes } = Sequelize;

const AsistenciaMaestro = db.define('AsistenciaMaestro', {
          uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: () => new Date().toISOString().slice(0, 10)
    },
    estado: {
        type: DataTypes.ENUM('Presente', 'Ausente', 'Retardo', 'Justificado'),
        defaultValue: 'Presente',
        allowNull: false
    },
maestroId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true
        
    },
    },
},
 {
    freezeTableName: true,
     timestamps: true,
});


 

export default AsistenciaMaestro;