import React from 'react'
import { storiesOf } from '@storybook/react'
import Layout from './component'
import { withRouter, withRedux } from '../../../.storybook/decorators'

const story = storiesOf('Layout', module)

story.addDecorator(withRedux())
story.addDecorator(withRouter)

story.add('default', () => <Layout />)
