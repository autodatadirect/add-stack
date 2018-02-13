import ajax from '../utils/ajax'
import { MANIFEST_COUNT } from '../constants/uris'
import mock from './mocks/manifestCountServiceMock'

export default function (filter) {
  return ajax.post({url: MANIFEST_COUNT, data: {filter}, mock: mock})
}
