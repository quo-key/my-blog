<template>
<!-- 总页数大于1时才显示-->

  <div class="pager-container" v-if='pageNumber > 1'>
      <a :class="{disabled:current === 1}" @click="handleClick(1)" >|&lt;&lt;</a>
      <a :class="{disabled:current === 1}" @click="handleClick(current - 1)" >&lt;&lt;</a>
       <a 
       v-for ="(n,i) in numbers"
       :key="i"
       :class="{ active:n === current}"
       @click="handleClick(n)"
       >
       {{ n }}
       </a>
       <a :class="{disabled:current === pageNumber}" @click="handleClick(current + 1)">&gt;&gt;</a>
       <a :class="{disabled:current === pageNumber}" @click="handleClick(pageNumber)">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props:{
      current:{
          type:Number,
          default:1
      },//当前页码
      total:{
          type:Number,
          default:0
      },//总数据量
      limit:{
          type:Number,
          default:10,
      },//页容量
      visibleNumber:{
          type:Number,
          default:10
      },//可见页码数

  },
  methods:{
       handleClick(newPage){
          
      if(newPage < 1){
        newPage = 1
      }
      if(newPage > this.pageNumber){
        newPage = this.pageNumber
      }
      if(newPage === this.current){
        return
      }
       //抛出一个事件,子组件无法改变父组件数据，只能抛出事件
      this.$emit("PageChange",newPage) //先定义，后抛出事件

    }
  },
  computed:{
      pageNumber(){
         return Math.ceil(this.total / this.limit) 
      },//总页数
      visibleMin(){
          let min = this.current - Math.floor(this.visibleNumber / 2);
          if(min < 1){
              min = 1
          }
          return min
      },//最小页数
      visibleMax(){
          let max = this.visibleMin + this.visibleNumber - 1;
          if(max > this.pageNumber){
              max = this.pageNumber
          }
          return max
      },//最大页数
      numbers(){
          let nums = [];
          for(let i = this.visibleMin;i <= this.visibleMax;i ++){
              nums.push(i)
          }
          return nums
      }//页码实际显示数组
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a{
        color: @primary;
        margin:0 6px;
        cursor: pointer;
        &.disabled{
            color:@lightWords;
            cursor:not-allowed;
        }
        &.active{
            color:@words;
            font-weight: bold;
            cursor: text;
        }
    }
}
</style>

