const config = require('./config')
const app = require('./app') 
const port = config.api.port

app.listen(port, () => {
  console.log(`Escuchando en la http://localhost:${port}`);
});