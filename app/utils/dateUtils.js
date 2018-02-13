import format from 'date-fns/format'

export const DATE_DISPLAY_FORMAT = 'M/D/YYYY h:mma'
export const DATE_DISPLAY_FORMAT_NO_TIME = 'M/D/YYYY'
export const DATE_DISPLAY_FORMAT_WITH_SECONDS = 'M/D/YYYY h:mm:ss a'

export const formatDate = (date) => {
  return format(date, DATE_DISPLAY_FORMAT_NO_TIME)
}

export const formatDateTime = (datetime) => {
  return format(datetime, DATE_DISPLAY_FORMAT)
}

export const formatDateTimeWithSeconds = (datetime) => {
  return format(datetime, DATE_DISPLAY_FORMAT_WITH_SECONDS)
}
