const execPhp = require("../../lib/execPhp")
const newError = require("../../lib/error");
const lunaMarket = require("../../config").lunaMarket;

async function encriptar(telefono) {
  if (!telefono) {
    throw newError("Dato invalido", 502);
  }
  const expues = await execPhp(telefono, lunaMarket.keybank);

  return expues;
}

module.exports = {
  encriptar,
};