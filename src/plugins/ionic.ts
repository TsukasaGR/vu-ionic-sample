import Vue from 'vue'
import Ionic from '@ionic/vue'
import '@ionic/core/css/ionic.bundle.css'
import '@/assets/ionic-variables.css'
import { addIcons } from 'ionicons'
import * as allIcons from 'ionicons/icons'

Vue.use(Ionic)

const currentIcons = Object.keys(allIcons).map(i => {
  const key = i.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
  // FIXME: ひとまずこれで回避
  // @ts-ignore
  const targetIcon = allIcons[i]
  if (typeof targetIcon === 'string') {
    return {
      [key]: targetIcon,
    }
  }
  return {
    ['ios-' + key]: targetIcon.ios,
    ['md-' + key]: targetIcon.md,
  }
})

const iconsObject = Object.assign({}, ...currentIcons)
addIcons(iconsObject)
