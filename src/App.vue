<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside></SiteAside>
        </div>
      </template>
      <template #default>
        <div class="main">
          <RouterView></RouterView>
        </div>   
      </template>
    </Layout>
    <ToTop></ToTop>
  </div>
</template>

<script>
import Layout from "./components/Layout"
import SiteAside from "./components/SiteAside"
import ImageLoader from "./components/ImageLoader"
import ToTop from "./components/ToTop"
export default {
  name: 'App',
  components: {
     Layout,
     SiteAside,
     ImageLoader,
     ToTop
  },
}
</script>

<style scoped lang="less">
@import url("~@/styles/mixin.less");
#app{
.self-fill(fixed);
// background-color:lightblue;
}
.aside{
  height: 100%;
  background-color:rgb(32, 31, 31) ;
}
.main{
  height: 100%;
}


</style>
