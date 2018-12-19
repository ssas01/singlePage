// 使用 es6 模块
import Vue from 'vue'
import SkeletonComponent from './pages/main/SkeletonComponent.vue'
import router from './router/router'
import store from './store/store'

import './styles/reset.css'
import './styles/main.scss'
import './styles/fonts.scss'

import 'common/directives/focus.js'

const app = new Vue({
    el: '#root',
    template: `
        <SkeletonComponent>
        </SkeletonComponent>
    `,
    components: {
        SkeletonComponent
    },
    router,
    store
})
