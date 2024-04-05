import { createStore } from 'vuex'

import authModule from '../components/Login/store'

const store = createStore({
  modules: {
    authModule
  }
})

export default store