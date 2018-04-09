import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'

import './index.scss'

// This file can be excluded, and the manifest styled manually if wished
import 'redux-manifest/dist/styles.css'

const Layout = props =>
  <div className='Layout'>
    <Container fluid>
      <Row className='addstack-main'>
        <Col>
          {props.children}
        </Col>
      </Row>
    </Container>
  </div>

Layout.propTypes = {
  children: PropTypes.array
}

export default Layout
