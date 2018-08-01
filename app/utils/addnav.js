const getGlobalObject = () => {
  const add123 = window.ADD123
  if (!add123) throw new Error('ADD123 global is not configured!')
  return add123
}

export const getSession = () => getGlobalObject().getSession()

export const setApplication = ({appName}) => getGlobalObject().setApplication({appName})
