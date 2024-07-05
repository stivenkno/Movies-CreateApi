/**
 * Configuración del servidor Express con CORS y manejo de rutas para una API de medios.
 * 
 * Dependencias:
 * - express: Framework web minimalista para Node.js.
 * - cors: Middleware para habilitar CORS.
 * - dotenv: Carga variables de entorno desde un archivo .env.
 * 
 * Rutas:
 * - /api/movies: Maneja rutas relacionadas con películas.
 * - /api/tv: Maneja rutas relacionadas con programas de televisión.
 * - /api/people: Maneja rutas relacionadas con personas.
 * - /api/trending: Maneja rutas relacionadas con contenidos en tendencia.
 * 
 * El servidor escucha en el puerto especificado en las variables de entorno.
 */

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import movies from './routes/movies.js'
import tv from './routes/tv.js'
import people from './routes/people.js'
import trending from './routes/trending.js'

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())

app.use('/api/movies', movies)    // Rutas relacionadas con películas
app.use('/api/tv', tv)            // Rutas relacionadas con programas de TV
app.use('/api/people', people)    // Rutas relacionadas con personas
app.use('/api/trending', trending) // Rutas relacionadas con contenidos en tendencia

app.listen(process.env.PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${process.env.PORT}`)
})

