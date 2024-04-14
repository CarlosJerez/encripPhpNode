function err(message, code) {
  let e = new Error();

  if (message) {
    e.message = message;
  }
  if (code) {
    e.statusCode = code;
  }
  return e;
}

module.exports = err;
