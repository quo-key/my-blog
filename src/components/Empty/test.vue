<template>
  <div id="app">
    <div class="test-container">
   <Empty></Empty>
    </div>
  </div>
</template>

<script>
import Empty from "./"
export default {
  name: 'App',
  components: {
     Empty,
  },
}
</script>

<style scoped>
.test-container{
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border:1px solid black;
}

</style>
