import React from 'react'
import { storiesOf } from '@storybook/react'
import UserDetail from './component'
import { withKnobs, text, boolean, object, number } from '@storybook/addon-knobs/react'
import { withRouter, withRedux } from '../../../.storybook/decorators'
import { initTranslator } from '../../utils/translate'
initTranslator()

const story = storiesOf('UserDetail', module)

story.addDecorator(withRedux())
story.addDecorator(withKnobs)
story.addDecorator(withRouter)

story.add('default', () => <UserDetail
  userName={text('userName', 'username')}
  emailAddress={text('emailAddress', 'email@email.com')}
  realName={text('realName', 'Real Danger Name')}
  phone={text('phone', '850-867-5309')}
  fax={text('fax', '850-123-4567')}
  creationDate={text('creationDate', '2016-11-28T19:24:58Z')}
  lastLogin={text('lastLogin', '2018-07-30T20:16:00Z')}
  dateLastChangedPassword={text('dateLastChangedPassword', '2018-05-25T15:39:31Z')}
  active={boolean('active', true)}
/>)
