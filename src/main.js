import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./router"
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)

if (process.env.NODE_ENV !== 'production') {
    console.log = (function(log) {
        return function(obj) {
            log.call(console, JSON.parse(JSON.stringify(obj)));
        }
    })(console.log);
} else {
    console.log = function() {}
}

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app")
