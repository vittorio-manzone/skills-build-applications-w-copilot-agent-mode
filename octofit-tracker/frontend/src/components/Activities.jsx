import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'activityId', label: 'Activity ID' },
  { key: 'userId', label: 'User' },
  { key: 'type', label: 'Type' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'activityDate', label: 'Date' },
]

function Activities() {
  return (
    <ResourceTable
      endpoint="/api/activities/"
      title="Activities"
      description="Recent movement logged by OctoFit athletes."
      columns={columns}
    />
  )
}

export default Activities