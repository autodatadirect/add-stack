import React from 'react'
import { storiesOf } from '@storybook/react'
import StandardError from './index'
import {withKnobs, select} from '@storybook/addon-knobs/react'
import {ERROR_CODES} from '../../../constants/errorCodes'

const stories = storiesOf('global.StandardError', module)
stories.addDecorator(withKnobs)

stories.add('hides without a code', () => <StandardError code={null} />)
stories.add('show different error types', () => {
  const selectedCode = select('error', getErrorCodes(), 'ERROR')
  return <StandardError code={selectedCode} values={getDemoValues(selectedCode)} />
})

const getErrorCodes = () => Object.entries(ERROR_CODES).map(([code, func]) => code)

const getDemoValues = (code) => {
  switch (code) {
    case 'DEFAULT': return ['default']
    case 'INPUT_MISSING': return ['PhoneNumber']
    case 'INPUT_INVALID': return ['FirstName', '123-723-8263']
    case 'ERROR': return ['This is a generic error message form the backend.', 'This is the cause that was provided']
    case 'UNAUTHORIZED': return ['Not authorized to access this section of arc.']
    case 'SESSION_NOT_FOUND':
  }
}
