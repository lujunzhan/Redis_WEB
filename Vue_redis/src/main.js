/*
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-12-01 22:24:10
 * @LastEditTime: 2020-12-08 20:43:47
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-12-01 22:24:10
 * @LastEditTime: 2020-12-04 23:14:42
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import 'view-design/dist/styles/iview.css';
// import { Button, Table, Message } from 'view-design';
// Vue.component('Button', Button);
// Vue.component('Table', Table);
// Vue.component('Message', Message);
import axios from "../api/axios";
import iView from 'iview'
Vue.use(iView)


Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')