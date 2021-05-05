import Vue from 'vue'
import VueRouter from "vue-router"
import routes from "./routes"
import { titleControl } from '@/utils'
 
Vue.use(VueRouter) //使用一个vue插件

const router = new VueRouter({
    //配置
    routes,
    mode:"history"
})
router.afterEach((to,from) => {
    if(to.meta.title){
        titleControl.setRouteTitle(to.meta.title);
    }
})
export default router