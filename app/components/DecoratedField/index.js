import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap'
import { Field } from 'redux-form'

let nextId = 0

const Help = ({ touched, error, warning }) => {
  if (touched && (error || warning)) {
    return <FormFeedback invalid>{error || warning}</FormFeedback>
  }
  return null
}

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

const isSelect = type => type === 'select'

const DefaultInputComponent = props => {
  if (!isSelect(props.type)) return <Input {...props} />
  return <Input {...props}><option />{props.options}</Input>
}

export const FieldDecorations = props => {
  const id = 'decoratedField_' + nextId++
  const InputComponent = props.InputComponent || DefaultInputComponent
  const isCheckbox = props.type === 'checkbox'
  return (
    <FormGroup check={isCheckbox} validationState={decodeValidationStatus(props.meta)} className={props.className}>
      { (props.label && !isCheckbox) ? <Label>{props.label}</Label> : null }
      <InputComponent id={id} {...props} check={isCheckbox} {...props.input} invalid={props.meta.invalid && props.meta.touched} />
      <Help {...props.meta} />
      { isCheckbox ? <Label for={id} check={isCheckbox}>{props.label}</Label> : null }
    </FormGroup>
  )
}

const DecoratedField = props => <Field key={props.name} {...props} component={FieldDecorations} InputComponent={props.component} />

DecoratedField.propTypes = {
  component: PropTypes.any,
  name: PropTypes.string
}

FieldDecorations.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  InputComponent: PropTypes.any
}

DefaultInputComponent.propTypes = {
  type: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

Help.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.bool
}

export default DecoratedField
