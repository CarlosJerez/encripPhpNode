const encriptar = require("../components/encriptar/network");
const test = require("../components/test/network");
const get404 = require("../components/404/network");
const { permisoUsuario } = require("../middlewares/validarPermisos");

const routes = (server) => {
  server.use("/app/encriptar", permisoUsuario, encriptar);
  server.use("/app/test", test);
  server.use(get404);
};

module.exports = routes;
