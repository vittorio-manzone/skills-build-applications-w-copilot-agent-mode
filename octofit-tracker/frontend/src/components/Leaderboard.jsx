import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'userId', label: 'User' },
  { key: 'teamId', label: 'Team' },
  { key: 'points', label: 'Points' },
]

function Leaderboard() {
  return (
    <ResourceTable
      endpoint="/api/leaderboard/"
      title="Leaderboard"
      description="Competition standings across teams and athletes."
      columns={columns}
    />
  )
}

export default Leaderboard