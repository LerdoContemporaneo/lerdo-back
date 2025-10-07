import Grados from "../models/GradosModel.js";
import Users from "../models/UserModel.js";


export const getGrados = async (req, res) => {
    try {
        const response = await Grados.findAll({
            attributes: ["id","uuid", "nombre", "maestroId"],
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


export const getGradosById = async (req, res) => {
    try {
        const grado = await Grados.findOne({
            attributes: ["id","uuid", "nombre", "maestroId"],
            where: { uuid: req.params.id },
            include: [
                {
                    model: Users,
                    attributes: ["id","uuid", "name", "email", "role"],
                },
            ],
        });
        if (!grado) return res.status(404).json({ msg: "Grado no encontrado" });
        res.status(200).json(grado);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


export const createGrados = async (req, res) => {
    const { nombre, maestroId } = req.body;
    try {
        await Grados.create({
            nombre,
            maestroId,
        });
        res.status(201).json({ msg: "Grado registrado correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


export const updateGrados = async (req, res) => {
    try {
        const { nombre, maestroId } = req.body;
        const result = await Grados.update(
            { nombre, maestroId },
            { where: { uuid: req.params.id } }
        );
        if (result[0] === 0) {
            return res.status(404).json({ msg: "Grado no encontrado" });
        }

        res.status(200).json({ msg: "Grado actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


export const deleteGrados = async (req, res) => {
    try {
        const result = await Grados.destroy({ where: { uuid: req.params.id } });

       
        if (result === 0) {
            return res.status(404).json({ msg: "Grado no encontrado" });
        }
        
        res.status(200).json({ msg: "Grado eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};