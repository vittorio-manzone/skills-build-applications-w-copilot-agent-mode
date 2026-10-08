import ResourceTable from './ResourceTable.jsx'
import { apiBaseUrl, normalizeApiResponse } from '../api.js'

const columns = [
  { key: 'activityId', label: 'Activity ID' },
  { key: 'userId', label: 'User' },
  { key: 'type', label: 'Type' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'activityDate', label: 'Date' },
]

function Activities() {
  async function loadActivities() {
    const response = await fetch(`${apiBaseUrl}/api/activities/`)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    return normalizeApiResponse(await response.json())
  }

  return (
    <ResourceTable
      loadRecords={loadActivities}
      title="Activities"
      description="Recent movement logged by OctoFit athletes."
      columns={columns}
    />
  )
}

export default Activities