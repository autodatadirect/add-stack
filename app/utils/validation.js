export const required = value => value ? undefined : 'Required'

export const isNumber = value => {
  if (!value) {
    return undefined
  } else if (isNaN(Number(value))) {
    return 'Must be a number'
  }
}

export const inputLen = requiredLength => value => {
  if (!value || value.length === requiredLength) {
    return undefined
  }
  if (requiredLength > 1) {
    return 'Must be ' + requiredLength + ' characters long'
  } else {
    return 'Must be ' + requiredLength + ' character long'
  }
}

export const inputLenMax = length => value => {
  if (!value || value.length <= length) {
    return undefined
  }
  return 'Must be ' + length + ' characters or less'
}
