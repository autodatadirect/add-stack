import React from 'react'
import PropTypes from 'prop-types'
import Markdown from '../Markdown'
import {decodeErrorMessage} from '../../constants/errorCodes'
import './index.scss'

const StandardError = ({ code, values }) => {
  if (!code) return null
  return <div className={'standard-error alert alert-danger'}>
    <ErrorBox message={decodeErrorMessage(code, values)} />
  </div>
}

const ErrorBox = ({ message }) => {
  if (!message) return null
  return <Markdown source={message} className={'error-box-markdown'} />
}

ErrorBox.propTypes = {
  message: PropTypes.string
}

StandardError.propTypes = {
  code: PropTypes.string,
  values: PropTypes.array
}

export default StandardError
