import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const Icon = ({type}) => {
  return (<span className={'stackicon stackicon-' + type} />)
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon
