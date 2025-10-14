import { Sequelize } from "sequelize";
import db from "../config/db.js"


const { DataTypes } = Sequelize;

const Grados = db.define('grados', {
          uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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




export default Grados;