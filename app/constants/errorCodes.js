export const ERROR_CODES = {
  INPUT_MISSING: values =>
    `# Required Input Missing
    \n You must provide a value for __${values[0]}__.`,

  INPUT_INVALID: values =>
    `# Input Provided Invalid
    \n The value of: __${values[1]}__ cannot be used for input __${values[0]}__.`,

  ERROR: values =>
    `# An Error Has Occurred
    \n ${values[0]}
    \n ${values[1].length > 0 ? `Cause: __${values[1]}__` : ''}`,

  UNAUTHORIZED: values =>
    `# Not Authorized Error
    \n ${values[0]}`,

  PARSE_ERROR: values =>
    `# Problem Parsing Input
    \n ${values[0]}
    \n ${values[1].length > 0 ? `Cause: __${values[1]}__` : ''}`,

  PERMISSION_DENIED: values =>
    `# Permission Denied
    \n You do not have permission to perform this action.`
}

export const decodeErrorMessage = (code, values) => {
  const standardValues = standardizeValues(values)
  if (!code) return ERROR_CODES['ERROR'](standardValues)
  if (!ERROR_CODES[code]) return ERROR_CODES['ERROR'](standardValues)
  return ERROR_CODES[code](standardValues)
}

const standardizeValues = values => {
  if (!values || values.length <= 0) return ['', '']
  const newValues = [...values]
  if (!newValues[0]) newValues[0] = ''
  if (!newValues[1]) newValues[1] = ''
  return newValues
}
