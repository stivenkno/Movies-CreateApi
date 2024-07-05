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

app.use('/api/movies', movies)
app.use('/api/tv', tv)
app.use('/api/people', people)
app.use('/api/trending', trending)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
