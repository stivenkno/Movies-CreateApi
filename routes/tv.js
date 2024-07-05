import { Router } from 'express'
import movieApiInstanceAxios from '../services/movieApiInstance.js'

const router = Router()

router.get('/', async (req, res) => {
  const { page = 1, region, language = 'en-US', query, genre } = req.query
  const params = new URLSearchParams({ page, region, language, query })

  try {
    const { data } = await movieApiInstanceAxios.get(`/search/tv?${params.toString()}`)

    if (genre && data.total_results > 0) {
      const { data: genres } = await movieApiInstanceAxios.get('/genre/tv/list')
      const genreId = genres.genres.find(g => g.name.toLowerCase() === genre.toLowerCase())?.id

      if (genreId) {
        data.results = data.results.filter(movie => movie.genre_ids.includes(genreId))
      } else {
        data.results = []
      }
    }
    res.send(data)
  } catch (error) {
    res.status(error.response.status).send({ error: error.response.data.status_message })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const { data } = await movieApiInstanceAxios.get(`/tv/${id}`)
    res.send(data)
  } catch (error) {
    res.status(error.response.status).send({ error: error.response.data.status_message })
  }
})

export default router
