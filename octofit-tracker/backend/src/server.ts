import express from 'express'
import './config/database.js'
import Activity from './models/Activity.js'
import Leaderboard from './models/Leaderboard.js'
import Team from './models/Team.js'
import User from './models/User.js'
import Workout from './models/Workout.js'

const app = express()
const port = Number(process.env.PORT || 8000)
const codespaceName = process.env.CODESPACE_NAME
export const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

function isAllowedOrigin(origin: string) {
  if (/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin)) {
    return true
  }

  return codespaceName
    ? origin === `https://${codespaceName}-5173.app.github.dev`
    : /^https:\/\/.+-\d+\.app\.github\.dev$/.test(origin)
}

app.use((request, response, next) => {
  const origin = request.get('origin')

  if (origin && isAllowedOrigin(origin)) {
    response.header('Access-Control-Allow-Origin', origin)
    response.header('Vary', 'Origin')
  }

  response.header('Access-Control-Allow-Methods', 'GET,OPTIONS')
  response.header('Access-Control-Allow-Headers', 'Content-Type')

  if (request.method === 'OPTIONS') {
    response.sendStatus(204)
    return
  }

  next()
})

app.use(express.json())

app.get('/api/health/', (_request, response) => {
  response.json({ status: 'ok', baseUrl })
})

app.get('/api/users/', async (_request, response, next) => {
  try {
    const users = await User.find().sort({ name: 1 })
    response.json(users)
  } catch (error) {
    next(error)
  }
})

app.get('/api/teams/', async (_request, response, next) => {
  try {
    const teams = await Team.find().sort({ name: 1 })
    response.json(teams)
  } catch (error) {
    next(error)
  }
})

app.get('/api/activities/', async (_request, response, next) => {
  try {
    const activities = await Activity.find().sort({ activityDate: -1 })
    response.json(activities)
  } catch (error) {
    next(error)
  }
})

app.get('/api/leaderboard/', async (_request, response, next) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ rank: 1 })
    response.json(leaderboard)
  } catch (error) {
    next(error)
  }
})

app.get('/api/workouts/', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().sort({ name: 1 })
    response.json(workouts)
  } catch (error) {
    next(error)
  }
})

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error)
  response.status(500).json({ error: 'Internal server error' })
})

app.listen(port, () => {
  console.log(`OctoFit API listening on port ${port}`)
})