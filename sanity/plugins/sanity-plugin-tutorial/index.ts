import {definePlugin} from 'sanity/lib/exports'
import {CustomDefaultLayout} from './CustomDefaultLayout'

export const getStartedPlugin = definePlugin({
  name: 'sanity-plugin-tutorial',
  studio: {
    components: {
      layout: CustomDefaultLayout
    }
  },
})
