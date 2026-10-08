import { useEffect, useState } from 'react'
import { apiBaseUrl } from '../api.js'

function formatValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Intl.DateTimeFormat(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(value))
  }

  return value ?? ''
}

function ResourceTable({ loadRecords, title, description, columns }) {
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadData() {
      try {
        setStatus('loading')
        const nextRecords = await loadRecords()

        if (!ignore) {
          setRecords(nextRecords)
          setStatus('ready')
        }
      } catch (loadError) {
        if (!ignore) {
          setError(loadError.message)
          setStatus('error')
        }
      }
    }

    loadData()

    return () => {
      ignore = true
    }
  }, [loadRecords])

  return (
    <section>
      <div className="page-heading">
        <div>
          <h1 className="h2 mb-1">{title}</h1>
          <p className="text-secondary">{description}</p>
        </div>
        <span className="badge text-bg-light border">{apiBaseUrl}</span>
      </div>

      <div className="resource-card">
        {status === 'loading' && <div className="loading-state">Loading {title.toLowerCase()}...</div>}
        {status === 'error' && <div className="error-state">Unable to load data: {error}</div>}
        {status === 'ready' && records.length === 0 && <div className="empty-state">No records found.</div>}
        {status === 'ready' && records.length > 0 && (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  {columns.map((column) => (
                    <th key={column.key} scope="col">{column.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record._id ?? record.id ?? record[columns[0].key]}>
                    {columns.map((column) => (
                      <td key={column.key}>{formatValue(record[column.key])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default ResourceTable