<template>
  <div class="test-container">
     <Contact></Contact>
  </div>
</template>

<script>
import Contact from "./"
import "@/styles/global.less"
export default {
 components:{
     Contact,
 }
}
</script>

<style>
.test-container{
    position: relative;
    width: 500px;
    height: 500px;
    border: 1px solid black;
    margin: 0 auto;
    background-color: black ;
}
</style>