export const defaultOptions = {
  headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
  credentials: 'same-origin'
}

export const throwHttpStatusErrors = response => {
  if (response.status >= 200 && response.status < 300) return
  var error = new Error(response.statusText)
  error.response = response
  throw error
}

export const deserializeJsonResponse = async response => response.json()
