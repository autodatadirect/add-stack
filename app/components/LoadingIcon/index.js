import React from 'react'

import './index.scss'

import { translateComponent } from '../../utils/translate'
const t = translateComponent('LoadingIcon')

const LoadingIcon = () => <div className='addstack-loading-icon'>{t('loading')}</div>

export default LoadingIcon
