<template>
  <div id="app">
    <Pager  :total="total" :current="current" @PageChange="handlePageChange($event)"></Pager>
  </div>
</template>

<script>
import Pager from "./"
export default {
  name: 'App',
  components: {
     Pager,
  },
  data(){
    return{
      current:10,
      total:20000
    }
  },
  methods:{
    handlePageChange(newPage){
      // console.log("页码改变了",newPage)
      this.current = newPage
    }
  }
}
</script>

<style scoped>

</style>