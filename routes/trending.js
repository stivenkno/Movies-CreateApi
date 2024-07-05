import { Router } from 'express'
import movieApiInstanceAxios from '../services/movieApiInstance.js'

const router = Router()

router.get('/:type', async (req, res) => {
  const { type } = req.params
  const { time_window = 'day' } = req.query

  try {
    const { data } = await movieApiInstanceAxios.get(`/trending/${type}/${time_window}`)
    res.send(data)
  } catch (error) {
    res.status(error.response.status).send({ error: error.response.data.status_message })
  }
})

export default router
