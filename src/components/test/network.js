const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', getTest);

function getTest(req, res, next) {
    response.success(req, res, 200, 'test Exitoso');
}

module.exports = router;
