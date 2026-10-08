import ResourceTable from './ResourceTable.jsx'
import { apiBaseUrl, normalizeApiResponse } from '../api.js'

const columns = [
  { key: 'teamId', label: 'Team ID' },
  { key: 'name', label: 'Name' },
  { key: 'mascot', label: 'Mascot' },
  { key: 'memberCount', label: 'Members' },
  { key: 'weeklyGoalMinutes', label: 'Weekly Goal' },
]

function Teams() {
  async function loadTeams() {
    const response = await fetch(`${apiBaseUrl}/api/teams/`)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    return normalizeApiResponse(await response.json())
  }

  return (
    <ResourceTable
      loadRecords={loadTeams}
      title="Teams"
      description="Team profiles and weekly activity targets."
      columns={columns}
    />
  )
}

export default Teams