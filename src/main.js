import 'regenerator-runtime'
import Vue from 'vue'
import i18n from '@molgenis/molgenis-i18n-js/dist/molgenis-i18n.esm'

import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@molgenis-ui/components-library/dist/components-library.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCaretRight,
  faExclamationTriangle,
  faSpinner,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

library.add(faCaretRight, faTimes, faSpinner, faExclamationTriangle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(i18n, {
  namespace: 'biobank-explorer',
  callback () {
    /* eslint-disable no-new */
    new Vue({
      render: h => h(App),
      components: { App }
    }).$mount('#app')
  }
})

Vue.use(BootstrapVue)
