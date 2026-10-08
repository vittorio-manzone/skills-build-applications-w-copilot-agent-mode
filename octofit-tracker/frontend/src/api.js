const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const codespacesHost = window.location.hostname.match(/^(.+)-5173\.app\.github\.dev$/)

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : codespacesHost
    ? `https://${codespacesHost[1]}-8000.app.github.dev`
  : 'http://localhost:8000'

export function normalizeApiResponse(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (Array.isArray(payload?.results)) {
    return payload.results
  }

  if (Array.isArray(payload?.items)) {
    return payload.items
  }

  if (Array.isArray(payload?.data)) {
    return payload.data
  }

  return []
}

export async function fetchResource(endpoint) {
  const response = await fetch(`${apiBaseUrl}${endpoint}`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return normalizeApiResponse(await response.json())
}