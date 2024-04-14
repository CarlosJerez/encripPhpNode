const util = require("util");
const exec = util.promisify(require("child_process").exec);
const newError = require("./error");

async function execPhp(telefono, key) {
  try {
    const { stdout } = await exec(`php index.php ${telefono} ${key}`);
    return stdout;
  } catch (e) {
    console.error(e);
    throw newError("Error ejecucion execPhp", 502);
  }
}

module.exports = execPhp;
