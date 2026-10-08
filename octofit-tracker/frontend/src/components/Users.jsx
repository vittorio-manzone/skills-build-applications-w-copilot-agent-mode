import ResourceTable from './ResourceTable.jsx'
import { apiBaseUrl, normalizeApiResponse } from '../api.js'

const columns = [
  { key: 'userId', label: 'User ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'teamId', label: 'Team' },
  { key: 'role', label: 'Role' },
  { key: 'weeklyMinutes', label: 'Weekly Minutes' },
]

function Users() {
  async function loadUsers() {
    const response = await fetch(`${apiBaseUrl}/api/users/`)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    return normalizeApiResponse(await response.json())
  }

  return (
    <ResourceTable
      loadRecords={loadUsers}
      title="Users"
      description="Athlete profiles connected to OctoFit teams."
      columns={columns}
    />
  )
}

export default Users