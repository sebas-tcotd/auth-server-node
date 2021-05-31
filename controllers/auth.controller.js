const { response } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require('bcryptjs');
const { generateJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {

    const { email, name, password } = req.body;

    try {
        // Verificando el email
        const usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            })
        }

        // Crear usuario con el modelo
        const dbUser = new Usuario(req.body);

        // Encriptando la contraseña mediante hash
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);

        // Generación del JSW
        const token = await generateJWT(dbUser.id, name);

        // Crear el usuario en la DB
        await dbUser.save();

        // Generación de prueba exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Algo salió mal, hable con el administrador.',
        });
    }




}

const loginUsuario = (req, res = response) => {
    const { email, password } = req.body;

    return res.json({
        ok: true,
        msg: 'Login de usuario /new',
    })
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Renew',
    })
}

module.exports = { crearUsuario, loginUsuario, revalidarToken }
