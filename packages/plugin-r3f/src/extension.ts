import SnapshotEditor from './components/SnapshotEditor'
import type {IExtension} from '@theatre/studio'
import Toolbar from './components/Toolbar/Toolbar'

const r3fExtension: IExtension = {
  id: '@theatre/plugin-r3f',
  globalToolbar: {
    component: Toolbar,
  },
  panes: [
    {
      class: 'snapshotEditor',
      component: SnapshotEditor,
    },
  ],
}

export default r3fExtension