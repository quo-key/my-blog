<template>
  <div class="test-container">
      <ImageLoader
      :src="'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=316865976,2940650346&fm=26&gp=0.jpg'"
      :placeholder="'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=316865976,2940650346&fm=26&gp=0.jpg'"
      @load="handleImage"
      :duration="3000"
      ></ImageLoader>
  </div>
</template>

<script>
import ImageLoader from "./"
export default {
components:{
    ImageLoader,
},
methods:{
   handleImage(){
       console.log("Img图片加载完成")
   }
}

}
</script>

<style scoped>
.test-container{
    width: 500px;
    height: 400px;
    margin: 0 auto;
    /* border: 2px solid black; */
    position: relative;
}
</style>