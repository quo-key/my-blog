<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="mainContainer">
      <BlogDetail :blog="data" v-if="data"></BlogDetail>
      <BlogComment v-if="!isLoading"></BlogComment>
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
     <BlogToc :toc="data.toc" v-if="data"></BlogToc>
      </div>
    </template>
  </Layout>

</template>

<script>
import fetchData from "@/mixins/fetchData"
import { getBlog } from "@/api/blog"
import Layout from "@/components/Layout"
import BlogDetail from "./components/BlogDetail"
import BlogToc from "./components/BlogToc"
import BlogComment from "./components/BlogComment"
import mainScroll from "@/mixins/mainScroll.js"
import { titleControl } from "@/utils"

export default {
  mixins:[fetchData(),mainScroll("mainContainer")],
  components:{
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment
  },
  methods:{
    async fetchData(){
      const resp =  await getBlog(this.$route.params.Id)
       titleControl.setRouteTitle(resp.title)
      return resp
    },
  },
  updated(){
    const hash = location.hash;
    location.hash ="";
    setTimeout(() => {
      location.hash = hash
    }, 100);
  },
}
</script>

<style lang="less" scoped>
.main-container{
 overflow-y: scroll;
 height:100% ;
 box-sizing:border-box ;
 padding: 20px;
 position: relative;
 scroll-behavior:smooth;
}
.right-container{
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing:border-box ;
  position: relative;
  padding: 20px;
}
</style>>

