import Reportes from "../models/ReportesModel.js";
import Alumnos from "../models/AlumnosModel.js";


export const getReportes = async (req, res) => {
 try {
        const response = await Reportes.findAll({
            attributes: ["id", "uuid", "titulo", "contenido", "alumnoId"],
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

export const getReportesById = async (req, res) => {
 try {
        const reportes = await Reportes.findOne({
            attributes: ["id", "uuid", "titulo", "contenido", "alumnoId"],
            where: { uuid: req.params.id },
            include: [
                {
                    model: Alumnos,
                     attributes: ["id","uuid", "nombre", "apellido", "matricula", "tutor"],
                },
            ],
        });
        if (!reportes) return res.status(404).json({ msg: "Reporte no encontrado" });
        res.status(200).json(reportes);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createReportes = async (req, res) => {
 const { titulo, contenido, alumnoId } = req.body;
    try {
 
        await Reportes.create({
            titulo,
            contenido,
             alumnoId
        });
        res.status(201).json({ msg: "Reporte creado correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
export const updateReportes = async (req, res) => {
 try {
    const reportes = await Reportes.findOne({ where: { uuid: req.params.id } });
    if (!reportes) return res.status(404).json({ msg: "Reporte no encontrado" });
    const { titulo, contenido, alumnoId } = req.body;

    await Reportes.update(
      { titulo, contenido, alumnoId },
      { where: { id: reportes.id } }
    );

    res.status(200).json({ msg: "Reporte actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteReportes = async (req, res) => {
 try {
        const result = await Reportes.destroy({ where: { uuid: req.params.id } });

        if (result === 0) {
            return res.status(404).json({ msg: "Reporte no encontrado" });
        }
        
        res.status(200).json({ msg: "Reporte eliminada correctamente " });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};