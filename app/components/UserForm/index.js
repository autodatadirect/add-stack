import { Field } from 'redux-form'
import { FormGroup, Button, Row, Col } from 'reactstrap'
import { required } from '../../utils/validation'
import PropTypes from 'prop-types'
import history from '../../history'
import * as iconTypes from '../../constants/iconTypes'

import InputField from '../InputField'
import LoadingIcon from '../LoadingIcon'
import Icon from '../Icon'

import './index.scss'

import { translateComponent } from '../../utils/translate'
const t = translateComponent('UserForm')

const submit = user => console.log('You have submitted:', user)
const onCancel = ev => history.push('/')

const UserLabel = () => (
  <span>
    {Icon({type: iconTypes.ACCOUNT})} {t('userId')}
  </span>
)

const UserForm = ({user, loading, handleSubmit}) => {
  if (loading) return LoadingIcon()
  return (
    <form className='user-form' key={user.id} onSubmit={handleSubmit(submit)}>
      <FormGroup className='update-employee-group'>
        <Row>
          <Col sm={12}><Field name='id' type='text' label={UserLabel()} component={InputField} validate={[required]} /></Col>
          <Col sm={12}><Field name='date' type='date' label={t('date')} component={InputField} validate={[required]} /></Col>
        </Row>
        <Row>
          <Col sm={12}><Field name='firstName' type='text' label={t('firstName')} component={InputField} validate={[required]} /></Col>
          <Col sm={12}><Field name='lastName' type='text' label={t('lastName')} component={InputField} validate={[required]} /></Col>
          <Col sm={12}><Field name='age' type='number' label={t('age')} component={InputField} validate={[required]} /></Col>
        </Row>
        <Row>
          <Col sm={12}><Field name='phone' type='text' label={t('phone')} component={InputField} validate={[required]} /></Col>
          <Col sm={12}><Field name='address' type='text' label={t('address')} component={InputField} validate={[required]} /></Col>
        </Row>
        <Row>
          <Col sm={1}><Button id='update-user' color='primary' type='submit'>{t('update')}</Button></Col>
          <Col sm={1}><Button id='cancel-update-user' color='danger' onClick={onCancel}>{Icon({type: iconTypes.CLOSE})} {t('cancel')}</Button></Col>
        </Row>
      </FormGroup>
    </form>
  )
}

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

UserLabel.propTypes = {
}

export default UserForm
