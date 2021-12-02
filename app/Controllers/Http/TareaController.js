'use strict'

const Proyecto =use('App/Models/Proyecto');
const Tarea = use('App/Models/Tarea');
const AutosizacionService = use('App/Services/AutorizacionService');

class TareaController{

    async create({ auth, request, params }){
        const user = await auth.getUser();
        const { descripcion } = request.all();
        const { id } = params;
        const proyecto = await Proyecto.find(id);
        AutorizacionService.verificarPermiso(proyecto, user);
        const tarea = new Tarea();
        tarea.fill({
            descripcion
        });
        await proyecto.tareas().save(tarea);
        return tarea;
    }

}

module.exports = TareaController