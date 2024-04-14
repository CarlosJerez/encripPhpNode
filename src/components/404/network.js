const newError = require("../../lib/error");

function get404(req, res, next) {
  const error = newError("Ruta no Encontrada", 404);
  next(error);
}

module.exports = get404;
