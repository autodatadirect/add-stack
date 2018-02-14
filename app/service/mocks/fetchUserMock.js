export default request => new Promise((resolve, reject) => {
  resolve({
    id: request.data.userId,
    address: '949 Zohid Terrace',
    age: 35,
    date: 1671332162570,
    firstName: 'Edna',
    lastName: 'Schmidt',
    phone: '(523) 954-6547'
  })
})
