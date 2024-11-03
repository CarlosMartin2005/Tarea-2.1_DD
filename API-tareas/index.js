import express, { json } from 'express'
import tareasRouter from './router/tareas.js'
import { corsMiddleware } from './middlewares/cors.js'
    
const app = express()

// Middleware
app.disable('x-powered-by')
app.use(json())
app.use(corsMiddleware())

const PORT = process.env.PORT || 3000

// Rutas
app.use('/tareas', tareasRouter)


// Manejo de rutas inexistentes
app.use((req, res) => {
    res.status(404).json({
        message: "URL no encontrada"
    })
})


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})