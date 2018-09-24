import { register } from 'async-ops'
import { defaultOptions, throwExceptionErrors, deserializeJsonResponse } from '../utils/fetch'
import { GET_USER } from '../constants/serviceTypes'

export const service = async userId => {
  const url = '/api/users/' + userId
  const options = {
    ...defaultOptions,
    method: 'GET'
  }
  const response = await window.fetch(url, options)
  const user = deserializeJsonResponse(response)
  throwExceptionErrors(user)
  return user
}

const mock = request => Promise.resolve({
  user: {
    'id': 1,
    'uuid': '123-123-123-123-123',
    'userName': 'jdoe',
    'realName': 'JOHN DOE',
    'emailAddress': 'JOHNDOE@ADD123.COM',
    'active': true,
    'creationDate': '2016-11-28T19:24:58Z',
    'dateLastChangedPassword': '2018-05-25T15:39:31Z',
    'lastLogin': '2018-07-30T20:16:00Z',
    'phone': '',
    'fax': ''
  }
})

register(GET_USER, service, mock)
