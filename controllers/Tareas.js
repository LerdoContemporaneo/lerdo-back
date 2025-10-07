import Tareas from "../models/TareasModel.js";
import Alumnos from "../models/AlumnosModel.js";


export const getTareas = async (req, res) => {
 try {
        const response = await Tareas.findAll({
            attributes: ["id", "uuid", "titulo", "descripcion", "fechaAsignacion", "fechaEntrega", "alumnoId"],
            include: [
                {
                    model: Alumnos,
                    attributes: ["id","uuid", "nombre", "apellido", "matricula", "tutor"],
                },
            ],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getTareasById = async (req, res) => {
 try {
        const tareas = await Tareas.findOne({
            attributes: ["id", "uuid", "titulo", "descripcion", "fechaAsignacion", "fechaEntrega", "alumnoId"],
            where: { uuid: req.params.id },
            include: [
                {
                    model: Alumnos,
                     attributes: ["id","uuid", "nombre", "apellido", "matricula", "tutor"],
                },
            ],
        });
        if (!tareas) return res.status(404).json({ msg: "Tarea no encontrada" });
        res.status(200).json(tareas);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createTareas = async (req, res) => {
 const { titulo, descripcion, fechaAsignacion, fechaEntrega, alumnoId } = req.body;
    try {
 
        await Tareas.create({
            titulo,
           descripcion,
            fechaAsignacion,
             fechaEntrega,
              alumnoId
        });
        res.status(201).json({ msg: "Tarea creada correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
export const updateTareas = async (req, res) => {
 try {
    const tareas = await Tareas.findOne({ where: { uuid: req.params.id } });
    if (!tareas) return res.status(404).json({ msg: "Tarea no encontrada" });
    const { titulo, descripcion, fechaAsignacion, fechaEntrega, alumnoId } = req.body;

    await Tareas.update(
      { titulo, descripcion, fechaAsignacion, fechaEntrega, alumnoId },
      { where: { id: tareas.id } }
    );

    res.status(200).json({ msg: "Tarea actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteTareas = async (req, res) => {
 try {
        const result = await Tareas.destroy({ where: { uuid: req.params.id } });

        if (result === 0) {
            return res.status(404).json({ msg: "Tarea no encontrada" });
        }
        
        res.status(200).json({ msg: "Tarea eliminada correctamente " });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};