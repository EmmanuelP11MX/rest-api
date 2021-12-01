'use strict'

const { LogicalException } = require ('@adonisjs/generic-exceptions')

class AccesoProhibidoException extends LogicalException {
    /**
     * Handle this exception by itself
     */
    handle (error, { response }) {
        return response.status(404).json({
            error: 'El recurso no existe'
        })
    }
}

module.exports = AccesoProhibidoException