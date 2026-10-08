import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'userId', label: 'User ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'teamId', label: 'Team' },
  { key: 'role', label: 'Role' },
  { key: 'weeklyMinutes', label: 'Weekly Minutes' },
]

function Users() {
  return (
    <ResourceTable
      endpoint="/api/users/"
      title="Users"
      description="Athlete profiles connected to OctoFit teams."
      columns={columns}
    />
  )
}

export default Users