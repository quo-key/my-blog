<template>
  <div id="app">
    <Avatar 
    :url="'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3157008819,1956455186&fm=26&gp=0.jpg'" 
    :size="200"
    ></Avatar>

  </div>
</template>

<script>
import Avatar from "./"

export default {
  name: 'App',
  components: {
     Avatar,
  },
}
</script>

<style scoped>

</style>