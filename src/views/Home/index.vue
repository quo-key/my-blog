<template>
<div class="home-container" ref="container" v-loading="loading" @wheel="handleWheel">
   <ul class="carousel-container" :style="{marginTop}" @transitionend="handleTransitionEnd">
  <li v-for="item in data" :key="item.id">
    <CarouselItem :carousel="item"></CarouselItem>
  </li>
   </ul>
  <div class="icon icon-up" v-show="i >= 1" @click="switchTo(i - 1)">
    <Icon type="arrowUp" ></Icon>
  </div>
  <div class="icon icon-down" v-show="i < data.length - 1" @click="switchTo(i + 1)">
    <Icon type="arrowDown"></Icon>
  </div>
  <ul class="indicator">
    <li 
      v-for="(item,index) in data"  
      :key="item.id" 
      :class="{active:index === i}"
      @click="switchTo(index)"
      >
    </li>
  </ul>
</div>
  
</template>

<script>
import { mapState } from "vuex"
import { getBanners } from "@/api/banner"
import CarouselItem from "./Carouselitem"
import Icon from "@/components/Icon"
// import fetchData from "@/mixins/fetchData.js"
export default {
  components:{
    CarouselItem,
    Icon
  },
  data(){
    return {
      isloading:true,
      banners:{},
      i:0, //当前显示的是第几张轮播图
      containerHeight:0, //整个容器高度
      isSwitching:false //是否正在切换中
    };
  },
  async created(){
    this.banners = await getBanners()
    this.isloading = false 
    // console.log(this.banners)
  },
  computed:{
    marginTop(){
       return -this.i*this.containerHeight + "px"
    },
    ...mapState("banner",["loading","data"])
  },
  created(){
     this.$store.dispatch("banner/fetchBanner")
  },
  mounted(){
    this.containerHeight = this.$refs.container.clientHeight
    window.addEventListener("resize",this.handleResize)
    
  },

  destroyed(){
   window.removeEventListener("resize",this.handleResize)
  },
  methods:{
    switchTo(n){
       this.i = n
    },
    handleResize(){
      this.containerHeight = this.$refs.container.clientHeight
    },
    handleWheel(e){
      if(this.isSwitching){
        return;
      }
      // console.log(e.deltaY)
      if(e.deltaY == -100 && this.i > 0){
         this.isSwitching = true
         this.i --
         //向上滚动
      }else if(e.deltaY == 100 && this.i < this.data.length - 1){
        this.isSwitching = true
         this.i ++
         //向下滚动
      }
    },
    handleTransitionEnd(){
      this.isSwitching = false
    }
  }
  

}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

@jump:5px;
@keyframes jump-up {
  0%{
    transform: translate(-50%,@jump);
  }
  50%{
    transform: translate(-50%,-@jump);
  }
  100%{
    transform: translate(-50%,@jump);
  }
}
@keyframes jump-down {
  0%{
    transform: translate(-50%,-@jump);
  }
  50%{
    transform: translate(-50%,@jump);
  }
  100%{
    transform: translate(-50%,-@jump);
  }
}

.home-container{
  // background-color:lightblue ;
  width:100% ;
  height: 100%;
  position: relative;
  overflow: hidden;//两个dom的margin合并了，需要bfc解决
  ul,h1{
    margin: 0;
    list-style: none;
    padding: 0;
  }
}
.carousel-container{
  width: 100%;
  height: 100%;
  transition: 500ms;
  
  li{
    width: 100%;
    height: 100%;
  }
}

.icon{
  .self-center();
  color: @gray;
  @gap:15px;
  cursor: pointer;
  transform: translateX(-50%);
  &.icon-up{
    top:@gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down{
    bottom:@gap;
    top: auto;
    animation: jump-down 2s infinite;
  }
}
.iconfont{
  font-size: 30px;
}
.indicator{
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li{
    width: 7px;
    height: 7px;
    border-radius: 50%;
    cursor: pointer;
    background-color:@words ;
    // box-sizing: border-box;
    margin-bottom:7px;
    &.active{
    background: white;
    }
  }
}
</style>>

