import ResourceTable from './ResourceTable.jsx'
import { apiBaseUrl, normalizeApiResponse } from '../api.js'

const columns = [
  { key: 'workoutId', label: 'Workout ID' },
  { key: 'name', label: 'Name' },
  { key: 'focus', label: 'Focus' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'recommendedFor', label: 'Recommended For' },
]

function Workouts() {
  async function loadWorkouts() {
    const response = await fetch(`${apiBaseUrl}/api/workouts/`)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    return normalizeApiResponse(await response.json())
  }

  return (
    <ResourceTable
      loadRecords={loadWorkouts}
      title="Workouts"
      description="Personalized training suggestions for OctoFit users."
      columns={columns}
    />
  )
}

export default Workouts