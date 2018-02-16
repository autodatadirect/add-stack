import { isString, isArray, isFunction } from 'lodash'

export function translateComponent (componentName) {
  if (!isString(componentName) || componentName.length === 0) throw new Error('translateComponent requires valid `componentName` argument.')

  return function t (...langKeys) {
    if (!isArray(langKeys) || langKeys.length === 0) throw new Error('Expected one or more lang key arguments.')
    return translate(componentName, ...langKeys)
  }
}

let T = null

export function setTranslator (translateFn) {
  T = translateFn
}

export function translate (...langKeys) {
  if (!isArray(langKeys) || langKeys.length === 0) throw new Error('Expected one or more lang key arguments.')
  if (!isFunction(T)) throw new Error('Translate was not initialized')
  return T([...langKeys].join('.'), {defaultValue: '** MISSING LANG KEY **'})
}
