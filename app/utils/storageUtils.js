export const setLocalStorage = (variable, value) => {
    if (!value) {
      window.localStorage.clear(variable)
    }
  
    window.localStorage.setItem(variable, value)
  }
  
  export const getLocalStorage = (cname) => {
    return window.localStorage.getItem(cname)
  }
  