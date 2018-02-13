import ajax from '../utils/ajax'
import { MANIFEST_DATA } from '../constants/uris'
import mock from './mocks/manifestDataServiceMock'

export default function (filter) {
  return ajax.post({url: MANIFEST_DATA, data: {filter}, mock: mock})
}
