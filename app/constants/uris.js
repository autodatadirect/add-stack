const PREFIX = '/arc'
const buildUrl = url => PREFIX + url
export const STATUS = buildUrl('/addstack/status')

export const MANIFEST_DATA = buildUrl('/addstack/api/manifest')
