<template>
  <div class="blog-container">
    <Layout>
        <BlogList></BlogList>
      <template #right>
        <BlogCategory></BlogCategory>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout"
import BlogList from "./components/BlogList"
import BlogCategory from "./components/BlogCategory"
export default {
  components:{
    Layout,
    BlogList,
    BlogCategory,
  },
   data(){
     return{
     }
   },
   methods:{
     handleSelect(item){
      // console.log(item)
     },
   }
}
</script>

<style lang="less" scoped>
</style>>

