// 使用 es6 模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import SkeletonComponent from './pages/main/SkeletonComponent.vue'
import router from './router/router'

import './common/reset.css'
import './common/main.scss'

Vue.use(VueRouter)

const app = new Vue({
    el: '#root',
    template: `
        <SkeletonComponent>
        </SkeletonComponent>
    `,
    // mixin: [],
    components: {
        SkeletonComponent
    },
    router
    // store
})


