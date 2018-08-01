import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Route } from 'react-router-dom'

import UserManifest from '../UserManifest'
import UserDetail from '../UserDetail'

import './index.scss'

// This file can be excluded, and the manifest styled manually if wished
import 'redux-manifest/dist/styles.css'

const Layout = () =>
  <div className='Layout'>
    <Container fluid>
      <Row className='add-stack-main'>
        <Col>
          <Route exact path='/' component={UserManifest} />
          <Route exact path='/user/:id' component={UserDetail} />
        </Col>
      </Row>
    </Container>
  </div>

export default Layout
