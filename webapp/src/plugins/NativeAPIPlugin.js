/**
 * 调用方法： 在main.js中引入，
 * Vue.use(NativeAPIPlugin, {
 * platform: true
 * })
 * 在页面方法中直接使用this.$camera
 */
let NativeAPIPlugin = {}
NativeAPIPlugin.install = function(Vue, options) {
  let plat = options.platform // true为cordova，false为H5，H5接口暂时留空
  Vue.prototype.$camera = plat === true ? navigator.camera : undefined
  Vue.prototype.$toast = plat === true ? window.plugins.toast : undefined
}
export default NativeAPIPlugin
