import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'teamId', label: 'Team ID' },
  { key: 'name', label: 'Name' },
  { key: 'mascot', label: 'Mascot' },
  { key: 'memberCount', label: 'Members' },
  { key: 'weeklyGoalMinutes', label: 'Weekly Goal' },
]

function Teams() {
  return (
    <ResourceTable
      endpoint="/api/teams/"
      title="Teams"
      description="Team profiles and weekly activity targets."
      columns={columns}
    />
  )
}

export default Teams