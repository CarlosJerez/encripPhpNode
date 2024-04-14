const response = require('../network/response')

function errors(err, req, res, next) {
    console.error('[error]', err.message)
    const message = err.message || 'Error Interno'
    const status = err.statusCode || 500
    response.error(req, res, status, {message})
    next()
}

module.exports = errors