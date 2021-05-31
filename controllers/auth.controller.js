const { response } = require("express");

const crearUsuario = (req, res = response) => {

    const { email, name, password } = req.body;

    return res.json({
        ok: true,
        msg: 'Crear usuario /new',
    })
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