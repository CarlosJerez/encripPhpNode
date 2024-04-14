const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', encriptar);

function encriptar(req, res, next) {
  const { telefono } = req.body;
  controller
    .encriptar(telefono)
    .then((data) => {
      response.success(req, res, 200, data);
    })
    .catch(next);
}

module.exports = router;