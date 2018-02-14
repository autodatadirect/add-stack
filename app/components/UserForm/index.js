import { Field } from 'redux-form'
import { FormGroup, Label, Button } from 'reactstrap'
import { required } from '../../utils/validation'
import InputField from '../InputField'
import PropTypes from 'prop-types'
import LoadingIcon from '../LoadingIcon'
import history from '../../history'

import './index.scss'

const submit = user => console.log('You have submitted:', user)
const onCancel = ev => history.push('/')
// TODO add i18n
const UserForm = ({user, loading, handleSubmit}) => {
  if (loading) return LoadingIcon()
  return (
    <form key={user.id} onSubmit={handleSubmit(submit)}>
      <FormGroup className='update-employee-group'>
        <Label>User Update</Label>
        <Field name='id' type='text' label='User Id' component={InputField} validate={[required]} />
        <Field name='date' type='date' label='Last Updated' component={InputField} validate={[required]} />
        <Field name='firstName' type='text' label='First Name' component={InputField} validate={[required]} />
        <Field name='lastName' type='text' label='Last Name' component={InputField} validate={[required]} />
        <Field name='age' type='number' label='Age' component={InputField} validate={[required]} />
        <Field name='phone' type='text' label='Phone #' component={InputField} validate={[required]} />
        <Field name='address' type='text' label='Address' component={InputField} validate={[required]} />
        <Button id='update-user' color='primary' type='submit'>UPDATE</Button>
        <Button id='cancel-update-user' color='danger' onClick={onCancel}>Cancel</Button>
      </FormGroup>
    </form>
  )
}

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default UserForm
