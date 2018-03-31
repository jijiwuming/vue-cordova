// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
// 注意，这里这样写后由于必须监听到deviceready事件，所以必须保障cordova.js已经引入
document.addEventListener(
  'deviceready',
  function() {
    console.log('device ready')
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
    // 添加splashscreen插件后需要下一句
    // window.navigator.splashscreen.hide()
  },
  false
)
