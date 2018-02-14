import ajax from '../utils/ajax'
import { FETCH_USER } from '../constants/uris'
import mock from './mocks/fetchUserMock'

export default function (userId) {
  return ajax.post({url: FETCH_USER, data: {userId}, mock: mock})
}
