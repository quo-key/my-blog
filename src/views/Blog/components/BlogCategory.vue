<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" v-show="!isLoading"></RightList>
  </div>
</template>

<script>
import RightList from "./RightList"
import fetchData from "@/mixins/fetchData.js"
import { getBlogCategory } from "@/api/blog"
export default {
  mixins:[fetchData([])],
  components:{
    RightList,
  },
  data(){
     return{
       ArticleCount:[],
       Count:null,

     }
  },
  beforeUpdate(){
    console.log(this.data)
  },
  
  updated(){
    if(this.Count){
      return
    }
   this.totalArticleCount()
       console.log(this.data)
  },
  destroyed(){
    // this.data = []
     console.log(this.data)
  },
  
  computed:{
      categoryId(){
          return +this.$route.params.categoryId || -1;
      },
      list(){
           const totalArticleCount = this.Count
           const results = [{
            name:"全部",
            id:-1,
            articleCount:totalArticleCount
          },...this.data]
            return  results.map(it => ({
            ...it,
            isSelect:it.id === this.categoryId,
            aside:`${it.articleCount}`
          }))
           
      },
      limit(){
        return +this.$route.query.limit || 10;
      },
  },

  methods:{
    async fetchData(){
      return await getBlogCategory()
    },
    handleSelect(item){
      const query = {
        page:1,
        limit:this.limit
      }
      if(item.id === -1){
        //当前没有分类
          this.$router.push({
            name:"Blog",
            query,
          }
          )
      }else{
        //有分类
        this.$router.push({
          name:"CategoryBlog",
          query,
          params:{
            categoryId:item.id
          }
        })

      }
    },
    totalArticleCount(){
      for(var i = 0;i < this.data.length;i++){
            // console.log(this.data[i].articleCount)
            this.ArticleCount.push(this.data[i].articleCount)
          }
          this.Count = this.ArticleCount.reduce((a,b) => a + b,0)
          return this.Count
    }
  },
  
  
}
</script>

<style lang="less" scoped>
.blog-category-container{
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  height: 969px;
  overflow-y: auto;
  h2{
    font-weight: bold;
    letter-spacing:2px;
    font-size: 1em;
    margin: 0;
  }
  
}

</style>>

