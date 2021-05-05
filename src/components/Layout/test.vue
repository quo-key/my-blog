<template>
  <div class="test-container">
      <Layout>
          <template #left>
            <div class="left">1</div>
          </template>
          <template #default>
          <div class="center">2</div>
          </template>
          <template #right>
         <div class="right">3</div>
          </template>
      </Layout>
  </div>
</template>

<script>
import Layout from "./"
export default {
   components:{
       Layout,
   }
}
</script>

<style scoped>
.test-container{
    /* display: flex; */
    width: 800px;
    height: 600px;
    border: 2px solid;
    margin: 0 auto;
}
.left{
    width: 300px;
    height: 100%;
    background-color: lightblue;
}
.center{
    width: 100%;
    height: 100%;
    background-color: lightpink;
}
.right{
    width: 300px;
    height: 100%;
    background-color: lightgray;
}
</style>