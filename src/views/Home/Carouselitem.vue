<template>
  <div class="carouselitem-container">
    <div class="carouse-img">
      <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg"></ImageLoader>
      <div class="title">{{ carousel.title }}</div>
      <div class="des">{{ carousel.des }}</div>
      
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader"
export default {
  props:["carousel"],
  components:{
    ImageLoader,
  }

}
</script>

<style lang="less" scoped>
.carouselitem-container{
  width: 100%;
  height: 100%;
  // background: lightblue;
  position: relative;
  .carouse-img{
   width: 100%;
  height: 100%;
  
  .title{
    position: absolute;
    top: calc(50% - 80px);
    color: white;
    left: 200px;
    font-size: 30px;
    text-shadow: 1px 0 0 rgba(0,0,0,.5),
                 -1px 0 0 rgba(0,0,0,.5),
                 0 1px 0 rgba(0,0,0,.5),
                 0 -1px 0 rgba(0,0,0,.5);
  }
  .des{
    position: absolute;
    width: 300px;
    top: calc(50% - 20px);
    color: white;
    left: 200px;
    font-size: 20px;
    text-shadow: 1px 0 0 rgba(0,0,0,.5),
                 -1px 0 0 rgba(0,0,0,.5),
                 0 1px 0 rgba(0,0,0,.5),
                 0 -1px 0 rgba(0,0,0,.5);

  }
  
  }
}
</style>>

