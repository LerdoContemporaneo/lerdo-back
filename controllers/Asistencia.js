import Asistencia from "../models/AsistenciaModel.js";
import Alumnos from "../models/AlumnosModel.js";

export const getAsistencia = async (req, res) => {
  try {
        const response = await Asistencia.findAll({
            attributes: ["id", "uuid", "fecha","estado", "alumnoId"],
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

export const getAsistenciaById = async (req, res) => {
 try {
        const asistencia = await Asistencia.findOne({
            attributes: ["id", "uuid", "fecha","estado", "alumnoId"],
            where: { uuid: req.params.id },
            include: [
                {
                    model: Alumnos,
                    attributes: ["id","uuid", "nombre", "apellido", "matricula", "tutor"],
                },
            ],
        });
        if (!asistencia) return res.status(404).json({ msg: "Registro no encontrado" });
        res.status(200).json(asistencia);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createAsistencia = async (req, res) => {
 const { fecha, estado, alumnoId } = req.body;
    try {
 
        await Asistencia.create({
            fecha,
            estado,
            alumnoId,
        });
        res.status(201).json({ msg: "Asistencia creada correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
export const updateAsistencia = async (req, res) => {
 try {
    const asistencia = await Asistencia.findOne({ where: { uuid: req.params.id } });
    if (!asistencia) return res.status(404).json({ msg: "Registro no encontrado" });
    const { fecha, estado, alumnoId } = req.body;

    await Asistencia.update(
      { fecha, estado, alumnoId },
      { where: { id: asistencia.id } }
    );

    res.status(200).json({ msg: "Asistencia actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteAsistencia = async (req, res) => {
 try {
        const result = await Asistencia.destroy({ where: { uuid: req.params.id } });

        if (result === 0) {
            return res.status(404).json({ msg: "Registro no encontrado" });
        }
        
        res.status(200).json({ msg: "Asistencia eliminada correctamente eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};