<template>
  <nav class="menu-container" >
      <router-link v-for="item in items" 
      :key="item.link" 
      :to="item.link" 
      :exact="item.exact"
      >
          <div class="icon">
              <Icon :type="item.icon"></Icon>
          </div>
          <span>{{item.title}}</span>
      </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon"
export default {
    components:{
        Icon,
    },
    data(){
        return{
            items:[
               {
                   link:"/",
                   title:"首页",
                   icon:"home",
                   exact:true

               },
               {
                   link:"/blog",
                   title:"博客",
                   icon:"blog",
                   exact:false
               },
               {
                   link:"/about",
                   title:"关于我",
                   icon:"about",
                   exact:true


               },
               {
                   link:"/project",
                   title:"项目&效果",
                   icon:"project",
                   exact:true


               },
               {
                   link:"/chat",
                   title:"留言",
                   icon:"chat",
                   exact:true

               },
            ]
        }
    },
    methods:{

    }

}
</script>

<style lang="less" scoped>
  @import url("~@/styles/var.less");
  .menu-container{
      margin: 24px 0;
      color: @gray;
      a{ 
        //   display: block;
          display: flex;
          padding: 0 50px;
          align-items: center;
          height: 45px;
          .icon{
              width: 24px;
          }
          &:hover{
              color: white;
          }
          &.router-link-active{
          background-color: #2d2d2d;
      }
      }
      
  }
</style>>

