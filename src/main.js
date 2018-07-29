import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './router'
export const bus=new Vue();
const router=new VueRouter({
  routes:Routes,
  mode:'history'
});
/*import Sec from './Sec.vue'
Vue.component('sec',Sec);
*/
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color='#'+Math.random().toString().slice(2,8);
  }
})
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.maxWidth="1200px";

    }
    if(binding.arg=='column'){
      el.style.background="#ddd";

    }
  }
});
Vue.filter('toUpperCase',function(value){
  return value.toUpperCase();
})
Vue.filter('snippt',function(value){
  return value.slice(0,100);
})
new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
})
new Vue({
  el: '#app_id',
  render: h => h(App2)
})
