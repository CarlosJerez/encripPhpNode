const config = require("../config")
const newError = require("../lib/error")

function permisoUsuario( req, res, next) {
    if (req.body.token !== config.api.autentic) throw newError("Usuario no autorizado", 403)
    next()
}

module.exports = {
    permisoUsuario,
}