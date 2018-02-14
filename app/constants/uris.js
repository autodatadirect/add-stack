const PREFIX = '/arc'
const buildUrl = url => PREFIX + url
export const STATUS = buildUrl('/addstack/status')

export const MANIFEST_DATA = buildUrl('/addstack/api/manifest')

export const FETCH_USER = buildUrl('/addstack/api/user')
