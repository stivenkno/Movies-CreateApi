import { Router } from 'express'
import movieApiInstanceAxios from '../services/movieApiInstance.js'

const router = Router()

router.get('/', async (req, res) => {
  const { page = 1, language = 'en-US', query, include_adult = false } = req.query
  const params = new URLSearchParams({ page, language, query, include_adult })

  try {
    const { data } = await movieApiInstanceAxios.get(`/search/person?${params.toString()}`)
    res.send(data)
  } catch (error) {
    res.status(error.response.status).send({ error: error.response.data.status_message })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const { data } = await movieApiInstanceAxios.get(`/person/${id}`)
    res.send(data)
  } catch (error) {
    res.status(error.response.status).send({ error: error.response.data.status_message })
  }
})

export default router
