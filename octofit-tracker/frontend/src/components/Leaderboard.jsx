import ResourceTable from './ResourceTable.jsx'
import { apiBaseUrl, normalizeApiResponse } from '../api.js'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'userId', label: 'User' },
  { key: 'teamId', label: 'Team' },
  { key: 'points', label: 'Points' },
]

function Leaderboard() {
  async function loadLeaderboard() {
    const response = await fetch(`${apiBaseUrl}/api/leaderboard/`)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    return normalizeApiResponse(await response.json())
  }

  return (
    <ResourceTable
      loadRecords={loadLeaderboard}
      title="Leaderboard"
      description="Competition standings across teams and athletes."
      columns={columns}
    />
  )
}

export default Leaderboard