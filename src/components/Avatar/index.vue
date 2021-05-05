<template>
  <img 
  class="avatar-container"
  :src="url" 
  :style="{
      width:size + 'px',
      height:size + 'px'
  }"
  >
</template>

<script>
export default {
    props:{
        url:{
            type:String,
            required:true
        },
        size:{
           type:Number
        }
    }
}
</script>

<style scoped>
.avatar-container{
    padding: 30px 0;
}

</style>