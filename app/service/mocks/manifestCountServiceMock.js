import { count } from './manifestDataServiceMock'

export default filter => new Promise((resolve, reject) => {
  resolve(count)
})
