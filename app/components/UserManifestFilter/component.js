import React from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Col } from 'reactstrap'
import DecoratedField from '../DecoratedField'

import { translateComponent } from '../../utils/translate'
const t = translateComponent('UserManifestFilter')

const UserManifestFilter = props =>
  <Form className='mt-4' onSubmit={props.handleSubmit}>
    <Row>
      <Col xs={12}>
        <DecoratedField placeholder={t('search')} name='search' />
      </Col>
    </Row>
  </Form>

UserManifestFilter.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default UserManifestFilter
