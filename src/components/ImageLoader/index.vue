<template>
  <div class="image-loader-container">
    <img :src="placeholder" alt=""  class="placeholder" v-if="!everythingDone">
    <img :src="src" alt="" class="origin" @load="handleLoader" :style="{opacity:originOpacity,
    transition:`${duration}ms`
    }">
  </div>
</template>

<script>
export default {
  props:{
      src:{
          type:String,
          required:true
      },
      placeholder:{
          type:String,
          required:true
      },
      duration:{
          type:Number,
          default:500
      }

  },
  data(){
    return{
        originLoaded:false,  //原图是否加载完成
        everythingDone:false //是否一切都完成了
    }
  },
  computed:{
    originOpacity(){
        return this.originLoaded ? 1: 0;
    }
  },
  methods:{
      handleLoader(){
          this.originLoaded = true
          setTimeout(() => {
             this.everythingDone = true
             this.$emit("load")
          },this.duration)
          // console.log("原图加载完成")
      }
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/mixin.less");
  .image-loader-container{
      width: 100%;
      height: 100%;
      overflow: hidden;
      
      img{
      .self-fill();
      object-fit: cover;
      }
  }
  .placeholder{
      filter:blur(2vw)
  }
</style>>

