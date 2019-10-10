import Vue from 'vue'
import App from './App.vue'  //渲染主组件
import router from './routers' //默认入口index 文件，所以最后的一个路径可以不写。
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
