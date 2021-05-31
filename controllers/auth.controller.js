const { response } = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            error: errors.mapped(),
        })
    }
    const { email, name, password } = req.body;
    console.log(email, name, password);

    return res.json({
        ok: true,
        msg: 'Crear usuario /new',
    })
}

const loginUsuario = (req, res = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            error: errors.mapped(),
        });
    }

    const { email, password } = req.body;
    console.log(email, password);

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