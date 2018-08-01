import { register } from 'async-ops'
import { defaultOptions, throwHttpStatusErrors, deserializeJsonResponse } from '../utils/fetch'
import { GET_USERS } from '../constants/serviceTypes'

const url = '/api/users'
export const service = async filter => {
  const options = {
    ...defaultOptions,
    method: 'POST',
    body: JSON.stringify({
      ...filter
    })
  }
  const users = await window.fetch(url, options)
  throwHttpStatusErrors(users)
  return deserializeJsonResponse(users)
}

const mock = request => Promise.resolve({
  users: [{
    'id': 1,
    'uuid': '123-123-123-123-111',
    'userName': 'add1',
    'realName': 'John Doe',
    'emailAddress': 'JohnDoe@add123.com',
    'active': true
  },
  {
    'id': 2,
    'uuid': '123-123-123-123-112',
    'userName': 'add2',
    'realName': 'John Dove',
    'emailAddress': 'JohnDove@add123.com',
    'active': false
  },
  {
    'id': 3,
    'uuid': '123-123-123-123-113',
    'userName': 'add3',
    'realName': 'John Deer',
    'emailAddress': 'JohnDeer@add123.com',
    'active': true
  }],
  count: 3
})

export default register(GET_USERS, service, mock)
