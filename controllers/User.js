import Users from "../models/UserModel.js"; 
import argon2 from "argon2";

export const getUsers = async (req, res) => {
    try {
        const response = await Users.findAll({
            attributes: ['id','uuid', 'name', 'email', 'role']
});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async (req, res) => {
     try {
        const response = await Users.findOne({
            attributes: ['id','uuid', 'name', 'email', 'role'],
            whure: {
                uuid: req.params.id
            }
});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUsers = async (req, res) => {
    const {name, email, password, confPassword, role} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Contraseña y Confirmar contraseña no coinciden"});
    const hashPassword = await argon2.hash(password);
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        });
               res.status(201).json({msg: "Usuario creado correctamente"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateUsers = async (req, res) => {
    const user = await Users.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "Usuario no encontrado"});
    const {name, email, password, confPassword, role} = req.body;
    let hashPassword;
    if(password === "" || password === null) {
        hashPassword = user.password;
    } else {
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Contraseña y Confirmar contraseña no coinciden"});
    try {
        await Users.update({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        }, {
            where: {
                id: user.id
            }
        });
res.status(201).json({msg: "Usuario actualizado correctamente"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteUsers = async (req, res) => {
    const user = await Users.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "Usuario no encontrado"});
    try {
        await Users.destroy({
            where: {
                id: user.id
            }
            });
        res.status(201).json({msg: "Usuario eliminado correctamente"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}