import format from 'date-fns/format'

export const DATE_DISPLAY_FORMAT = 'M/D/YYYY h:mma'
export const DATE_DISPLAY_FORMAT_NO_TIME = 'M/D/YYYY'
export const DATE_DISPLAY_FORMAT_WITH_SECONDS = 'M/D/YYYY h:mm:ss a'
export const DATE_DISPLAY_FORMAT_NO_TIME_FIELD = 'YYYY-MM-DD'

export const formatDate = date => format(date, DATE_DISPLAY_FORMAT_NO_TIME)

export const formatDateTime = datetime => format(datetime, DATE_DISPLAY_FORMAT)

export const formatDateTimeWithSeconds = datetime => format(datetime, DATE_DISPLAY_FORMAT_WITH_SECONDS)

export const formatDateForField = date => format(date, DATE_DISPLAY_FORMAT_NO_TIME_FIELD)
