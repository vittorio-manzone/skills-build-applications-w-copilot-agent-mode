import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'workoutId', label: 'Workout ID' },
  { key: 'name', label: 'Name' },
  { key: 'focus', label: 'Focus' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'recommendedFor', label: 'Recommended For' },
]

function Workouts() {
  return (
    <ResourceTable
      endpoint="/api/workouts/"
      title="Workouts"
      description="Personalized training suggestions for OctoFit users."
      columns={columns}
    />
  )
}

export default Workouts