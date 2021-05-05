//数据仓库模块

import Vuex from "vuex"
import Vue from "vue"
import banner from "./banner"
import setting from "./setting"
import about from "./about";
import project from "./project"
Vue.use(Vuex);//应用Vuex插件

export default new Vuex.Store({
    modules:{
        banner,
        setting,
        about,
        project,
    },
    strict:true

})
