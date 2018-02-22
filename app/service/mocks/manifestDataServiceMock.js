import data from './mockData'

export const count = 100

const sorter = id => (a, b) => {
  var nameA = a[id]
  var nameB = b[id]
  if (typeof nameA === 'string') nameA.toUpperCase()
  if (typeof nameB === 'string') nameB.toUpperCase()
  if (nameA < nameB) return -1
  if (nameA > nameB) return 1
  return 0
}

const fetchPage = ({page = 0, pageSize = 10, sorts}) => {
  const pageData = []
  const start = page * pageSize
  for (let i = start; i < (start + pageSize); i++) {
    if (i >= 0 && i < data.length) {
      pageData.push(data[i])
    }
  }
  return pageData
}

const sortData = sorts => {
  if (!sorts || !sorts.length) return
  const sort = sorts[0]

  if (!sort || !sort.id) return
  data.sort(sorter(sort.id))

  if (!sort.isAsc) {
    data.reverse()
  }
}

const compileResult = filter => {
  sortData(filter.sorts)
  return {
    data: fetchPage(filter),
    count
  }
}

export default request => new Promise((resolve, reject) => {
  resolve(compileResult(request.data.filter))
})
