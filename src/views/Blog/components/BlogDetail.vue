<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期:{{ formateDate(blog.createDate) }}</span>
      <span>浏览:{{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论:{{ blog.commentNumber }}</a>
      <RouterLink 
              :to="{
              name:'CategoryBlog',
              params:{
                categoryId:blog.category.id
              }
            }"
      >{{ blog.category.name }}
      </RouterLink>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body">
      <!-- {{ blog.htmlContent }} -->
    </div>

  </div>
</template>

<script>
import { formateDate }  from "@/utils"
import "@/styles/markdown.css"
import "highlight.js/styles/github.css"
export default {
  props:{
    blog:{
      type:Object,
      required:true
    }
  },
  methods:{
    formateDate
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.blog-detail-container{
  // height: 96px;
  .aside{
    font-size: 12px;
    color:@gray;
    span{
      margin-right: 15px;
    }
    a{
      margin-right: 15px;
     
    }
  }
}
</style>>

