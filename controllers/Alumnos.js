import Alumnos from "../models/AlumnosModel.js"; 
import Grados from "../models/GradosModel.js";

export const getAlumnos = async (req, res) => {
    try {
        const response = await Alumnos.findAll({
            attributes: ["id",'uuid', "nombre", "apellido", "matricula", "tutor"],
            include :[
                {model: Grados,
                 attributes: ["id","uuid", "nombre",]   

                },
            ],    
        });
    res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getAlumnoById = async (req, res) => {
      try {
        const alumno = await Alumnos.findOne({
            attributes: ["id",'uuid', "nombre", "apellido", "matricula", "tutor"],
            where: {uuid: req.params.id },
            include :[
                {model: Grados,
                 attributes: ["id","uuid", "nombre",]   

                },
            ],    
        });
        if(!alumno) return res.status(404).json({msg:"Alumno no encontrado"});
    res.status(200).json(alumno);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createAlumnos = async (req, res) => {
   
        const { nombre, apellido, matricula, tutor, gradoId} = req.body;
        try{
            await Alumnos.create({
                nombre,
                apellido,
                matricula,
                tutor,
                gradoId
            });
            res.status(201).json({ msg: "Alumno registrado correctamente"});

        }catch (error) {
            res.status(500).json ({ msg: error.message});
        }
};

export const updateAlumnos = async (req, res) => {
    try {
        const alumno = await Alumnos.findOne({where: {uuid: req.params.id}});
        if(!alumno) return res.status(404).json({msg:"Alumno no encontrado"});
          const { nombre, apellido, matricula, tutor, gradoId} = req.body;
          await Alumnos.update(
            {nombre, apellido, matricula, tutor, gradoId},
            {where: {id: alumno.id}}
          );
            res.status(201).json({ msg: "Alumno actualizado correctamente"});

        }catch (error) {
            res.status(500).json ({ msg: error.message});
        }
};

export const deleteAlumnos = async (req, res) => {
    try {
        const alumno = await Alumnos.findOne({where: {uuid: req.params.id}});
        if(!alumno) return res.status(404).json({msg:"Alumno no encontrado"});

        await Alumnos.destroy({where: { id: alumno.id}});
          res.status(201).json({ msg: "Alumno eliminado correctamente"});

        }catch (error) {
            res.status(500).json ({ msg: error.message});
        }
};