import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const movieApiInstanceAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.MOVIE_API_TOKEN}`
  }
})

export default movieApiInstanceAxios
