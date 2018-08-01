import '@storybook/addon-actions/register'
import '@storybook/addon-knobs/register'
import '@storybook/addon-options/register'
import registerRedux from 'addon-redux/register'
import addons from '@storybook/addons'

registerRedux(addons)
