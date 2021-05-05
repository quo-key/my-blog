<template>
  <div class="site-aside-container">
      <template v-if="data">
      <Avatar :url="data.avatar" ></Avatar>
      <h2>{{data.siteTitle}}</h2>
      </template>
      <Menu></Menu>
      <Contact v-if="data"></Contact>
      <p class="footer" v-if="data">{{data.icp}}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar"
import Menu from "./Menu"
import Contact from "./Contact"
import { mapState } from "vuex"

export default {
   components:{
       Avatar,
       Menu,
       Contact,
   },
   computed:mapState("setting",["data"])
   
}
</script>

<style lang="less" scoped>
.site-aside-container{
    width: 100%;
    height: 100%;
    // overflow-x: hidden;
    // overflow-y: auto;
    .footer{
    //  margin: 50px 0;
     text-align: center;
     color: #4d4444;
    }
    h2{
        text-align: center;
        color:white;
    }  
}
.avatar-container{
    margin: 0 50px;
    border-radius: 50%;
    width: 150px; 
    height: 150px;
   }
</style>>

