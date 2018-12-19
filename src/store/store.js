import Vue from 'vue'
import Vuex from 'vuex'

import showPicture from './module/showPicture'
import statistic from './module/statistic'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        showPicture,
        statistic
    }
})

export default store
