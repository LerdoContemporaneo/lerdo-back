import AsistenciaMaestro from "../models/AsistenciaMaestro.js";
import Users from "../models/UserModel.js"; 


export const getAsistenciaMaestro = async (req, res) => {
    try {
        const response = await AsistenciaMaestro.findAll({
            attributes: ["id", "uuid", "fecha","estado", "maestroId"],
            include: [
                {
                    model: Users,
                    attributes: ["id","uuid", "name", "email", "role"],
                },
            ],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getAsistenciaMaestroById = async (req, res) => {
 try {
        const asistenciamaestro = await AsistenciaMaestro.findOne({
            attributes: ["id", "uuid", "fecha","estado", "maestroId"],
            where: { uuid: req.params.id },
            include: [
                {
                    model: Users,
                    attributes: ["uuid", "name", "email", "role"],
                },
            ],
        });
        if (!asistenciamaestro) return res.status(404).json({ msg: "Registro no encontrado" });
        res.status(200).json(grado);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createAsistenciaMaestro = async (req, res) => {
 const { fecha, estado, maestroId } = req.body;
    try {
        
        await AsistenciaMaestro.create({
            fecha,
            estado,
            maestroId,
        });
        res.status(201).json({ msg: "Asistencia creada correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
export const updateAsistenciaMaestro = async (req, res) => {    
 try {
    const asistenciamaestro = await AsistenciaMaestro.findOne({ where: { uuid: req.params.id } });
    if (!asistenciamaestro) return res.status(404).json({ msg: "Registro no encontrado" });
    const { fecha, estado, maestroId } = req.body;

    await AsistenciaMaestro.update(
      { fecha, estado, maestroId },
      { where: { id: asistenciamaestro.id } }
    );

    res.status(200).json({ msg: "Asistencia actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteAsistenciaMaestro = async (req, res) => {
 try {
        const result = await AsistenciaMaestro.destroy({ where: { uuid: req.params.id } });

       
        if (result === 0) {
            return res.status(404).json({ msg: "Registro no encontrado" });
        }
        
        res.status(200).json({ msg: "Asistencia eliminada correctamente eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};