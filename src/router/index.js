import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import page1View from 'views/page1'
import page2View from 'views/page2'
import page3View from "views/page3"
export default new Router({
    //mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/page1', name: "page1", component: page1View },
        { path: '/page2', name: "page2", component: page2View },
        { path: '/page3', name: "page3", component: page3View },
        { path: '*', redirect: '/page1' }
    ]
})