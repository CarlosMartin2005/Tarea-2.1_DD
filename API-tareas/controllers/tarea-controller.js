import tareas from '../DB/tareas.json' with {type: "json"}

export class TareaController {

    static getTareas(req, res) {
        res
            .header('Content-Type', 'application/json')
            .status(200)
            .json(tareas)
    }

    static getTareaporId(req, res) {
        const { id } = req.params
        const tarea = tareas.find(tarea => tarea.id === parseInt(id))

        if(!tarea) {
            res
                .header('Content-Type', 'application/json')
                .status(404)
                .json({
                    message: "Tarea no encontrada"
                })
            return
        }

        res
            .header('Content-Type', 'application/json')
            .status(200)
            .json(tarea)
    }

    static createTarea(req, res) {
        const data = req.body
        
        const id = tareas.length + 1

        data.id = id

        tareas.push(data)

        res
            .header('Content-Type', 'application/json')
            .status(201)
            .json(data)
    }

    static updateTarea(req, res) {
        const { id } = req.params
        const data = req.body

        const tareaIndex = tareas.find(tarea => tarea.id === parseInt(id))

        if (tareaIndex === -1) {
            res
                .header('Content-Type', 'application/json')
                .status(404)
                .json({
                    message: "Tarea no encontrada"
                })
            return
        }

        tareas[tareaIndex] = { ...tareas[tareaIndex], ...data }

        res
            .header('Content-Type', 'application/json')
            .status(200)
            .json(tareas[index])
    }

    static deleteTarea(req, res) {
        const { id } = req.params

        const tareaIndex = tareas.findIndex(tarea => tarea.id === parseInt(id))

        if (tareaIndex === -1) {
            res
                .header('Content-Type', 'application/json')
                .status(404)
                .json({
                    message: 'Tarea no encontrada'
                })
            return
        }

        // El splice se encarga de eliminar el elemento de la lista 
        // El ,1 es para indicar que solo se eliminará un elemento
        tareas.splice(tareaIndex, 1)

        res
            .header('Content-Type', 'application/json')
            .status(204)
            .end()
    }
}