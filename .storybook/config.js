import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

function requireAll (requireContext) {
  return requireContext.keys().map(requireContext)
}

function loadStories() {
  requireAll(require.context('../app/', true, /story\.js$/))
}

setOptions({
  name: 'ADD Stack Storybook',
  sortStoriesByKind: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\./
});

configure(loadStories, module);