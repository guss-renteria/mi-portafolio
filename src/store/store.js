import { createStore } from 'vuex'

import color_scheme from './modules/color_scheme.module'

export default createStore({
  modules: {
    color_scheme,
  }
})
