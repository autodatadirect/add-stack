import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button } from 'reactstrap'
import './index.scss'

import { translateComponent } from '../../utils/translate'
const t = translateComponent('UserDetail')

const UserInfoField = ({ label, data }) =>
  <div>{label + ': '}<b>{data}</b></div>

const twoCol = {xs: 12, sm: 6}
const UserDetail = props =>
  <div>
    <Container className='addstack-user-detail mt-4' fluid>
      <Row>
        <Col xs={12} md={6}><h1>{props.realName}</h1></Col>
        <Col xs={12} md={3}><Button href='#/'>{t('cancel')}</Button></Col>
        <Col xs={12} md={3}><Button color='danger'>{t('disableUser')}</Button></Col>
      </Row>
      <Row className='mt-4'>
        <Col {...twoCol}><UserInfoField label={t('userName')} data={props.userName} /></Col>
        <Col {...twoCol}><UserInfoField label={t('email')} data={props.emailAddress} /></Col>
        <Col {...twoCol}><UserInfoField label={t('active')} data={props.active ? t('enabled') : t('disabled')} /></Col>
        <Col {...twoCol}><UserInfoField label={t('phone')} data={props.phone} /></Col>
        <Col {...twoCol}><UserInfoField label={t('fax')} data={props.fax} /></Col>
        <Col {...twoCol}><UserInfoField label={t('created')} data={props.creationDate} /></Col>
        <Col {...twoCol}><UserInfoField label={t('lastLogin')} data={props.lastLogin} /></Col>
        <Col {...twoCol}><UserInfoField label={t('lastChangedPassword')} data={props.dateLastChangedPassword} /></Col>
      </Row>
    </Container>
  </div>

UserDetail.propTypes = {
  userName: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  realName: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  phone: PropTypes.string.isRequired,
  fax: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  lastLogin: PropTypes.string.isRequired,
  dateLastChangedPassword: PropTypes.string.isRequired
}

UserInfoField.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired
}

export default UserDetail
