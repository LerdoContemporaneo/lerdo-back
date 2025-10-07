import Incidencia from "../models/IncidenciaModel.js";
import Alumnos from "../models/AlumnosModel.js";

export const getIncidencias = async (req, res) => {
  try {
        const response = await Incidencia.findAll({
            attributes: ["id", "uuid", "tipo", "descripcion", "alumnoId"],
            include: [
                {
                    model: Alumnos,
                    attributes: ["id", "uuid", "nombre", "apellido", "matricula", "tutor"],
                },
            ],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getIncidenciasById = async (req, res) => {
 try {
        const incidencia = await Incidencia.findOne({
            attributes: ["id", "uuid", "tipo", "descripcion", "alumnoId"],
            where: { uuid: req.params.id },
            include: [
                {
                    model: Alumnos,
                    attributes: ["id", "uuid", "nombre", "apellido", "matricula", "tutor"],
                },
            ],
        });
        if (!incidencia) return res.status(404).json({ msg: "Incidencia no encontrado" });
        res.status(200).json(incidencia);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createIncidencias = async (req, res) => {
 const { tipo, descripcion, fecha, alumnoId } = req.body;
    try {
 
        await Incidencia.create({
           tipo,
            descripcion,
            fecha,
            alumnoId,
        });
        res.status(201).json({ msg: "Incidencia creada correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
export const updateIncidencias = async (req, res) => {
 try {
    const incidencia = await Incidencia.findOne({ where: { uuid: req.params.id } });
    if (!incidencia) return res.status(404).json({ msg: "Incidencia no encontrada" });
    const { tipo, descripcion, fecha, alumnoId } = req.body;

    await Incidencia.update(
      { tipo, descripcion, fecha, alumnoId },
      { where: { id: incidencia.id } }
    );

    res.status(200).json({ msg: "Incidencia actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteIncidencias = async (req, res) => {
 try {
        const result = await Incidencia.destroy({ where: { uuid: req.params.id } });

        if (result === 0) {
            return res.status(404).json({ msg: "Incidencia no encontrado" });
        }
        
        res.status(200).json({ msg: "Incidencia eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};