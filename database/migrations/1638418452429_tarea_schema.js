'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TareaSchema extends Schema {
  Up () {
    this.create('tareas',(table)=>{
    table.increments()
    table.integer('proyecto_id').unsigned().references('id').inTable('proyectos')
    table.string('descripcion',255).notNullable()
    table.timestmps()
    })
  }

down (){
  this.drop('tareas')
  }
}

Module.exports = TareaSchema
