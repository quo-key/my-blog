<template>
  <ul class="right-list-container">
      <li v-for="(item,i) in list" :key="i">
          <span @click="handleClick(item)" :class="{active:item.isSelect}" >
              {{ item.name }}
          </span>
          <span v-if="item.aside" class="aside" @click="handleClick(item)" :class="{active:item.isSelect}">{{ item.aside}}篇</span>
          <RightList :list="item.children" @select="handleClick"></RightList>
      </li>
  </ul>
</template>

<script>
export default {
  name:"RightList",
  props:{
      //[{name:"xxx",isSelect:true,children:[{name:"yyyy",isSelect:true}]}]
      list:{
          type:Array,
          default:()=>[]  
      }
  },
  methods:{
      handleClick(item){
          console.log(item)
          if(!item.isSelect){
             this.$emit("select",item)
          }
      }
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.right-list-container{
    list-style: none;
    padding: 0;

    .right-list-container{
        margin-left: 1em;
    }
    li{
        cursor: pointer;
        min-height: 40px ;
        line-height: 40px;
        font-size: 14px;
        font-weight: bold;
        .active {
            color: @warn;
        }
    }
}
 .aside{
  font-size: 12px;
  color:@gray;
  margin-left: 1em;
}
</style>>

