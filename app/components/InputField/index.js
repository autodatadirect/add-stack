import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import PropTypes from 'prop-types'

import './index.scss'

const decodeValidationStatus = ({ touched, error, warning }) => {
  if (!touched) {
    return
  }
  if (error) {
    return 'error'
  }
  if (warning) {
    return 'warning'
  }
}

const renderHelp = ({ touched, error, warning }) => {
  if (touched && (error || warning)) {
    return <div className='help-block'>{error || warning}</div>
  }
  return null
}

const InputField = props => {
  return (
    <FormGroup className={props.className} controlId={props.id} validationState={decodeValidationStatus(props.meta)}>
      <Label>{props.label}</Label>
      <Input
        {...props.input}
        placeholder={props.placeholder}
        componentClass='input'
        type={props.type}
        {...props} />
      {renderHelp(props.meta)}
    </FormGroup>
  )
}

InputField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string,
    warning: PropTypes.bool,
    touched: PropTypes.bool
  }).isRequired
}

export default InputField
