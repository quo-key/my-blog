<template>
  <div id="app">
    <div class="test-container">
      <div class="item" v-for="t in types" :key="t">
      <Icon :type="t"></Icon>  
      <label >{{ t }}</label>
      </div>
    </div>
    </div>
</template>

<script>

import Icon, { types } from "./"

export default {
  name: 'App',
  components: {
     Icon,
  },
  data(){
    return{
      types,
    }
  }
}
</script>

<style scoped>
.test-container{
  display: flex;
  justify-content: center;
   margin: 0 auto;
  width: 580px;
  flex-wrap: wrap;
}
.item{
  margin: 1em;
  text-align: center;
}
.iconfont{
  font-size: 20px;
  color :green;
}
</style>
