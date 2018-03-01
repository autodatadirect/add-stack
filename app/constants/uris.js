const PREFIX = '/addstack'
const buildUrl = url => PREFIX + url
export const STATUS = buildUrl('/status')

export const MANIFEST_DATA = buildUrl('/api/manifest')

export const FETCH_USER = buildUrl('/api/user')
