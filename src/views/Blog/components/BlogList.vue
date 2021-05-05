<template>
  <div class="blog-list-container" v-loading="isLoading" ref="mainContainer">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link :to="{name:'BlogDetail',params:{
            Id:item.id,
          }}" >
            <img
               v-lazy="item.thumb"
              :alt="item.title"
              :title="item.title"
            />
          </router-link>
        </div>
        <div class="main">
          <router-link :to="{name:'BlogDetail',params:{
            Id:item.id,
          }}">
            <h2>{{item.title}}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{formateDate(item.createDate)}}</span>
            <span>浏览：{{item.scanNumber}}</span>
            <span>评论{{item.commentNumber}}</span>
            <RouterLink :to="{
              name:'CategoryBlog',
              params:{
                categoryId:item.category.id
              }
            }" >{{item.category.name}}</RouterLink>
          </div>
          <div class="desc">
            同空能京南进安西完再支风飞严领光。得生这局月确位军们离存电。热建子光验复更度合确验前切声。
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isLoading"></Empty>
    <Pager  v-if="data.total" 
    :total="data.total" 
    :current="routeInfo.page" 
    :limit="routeInfo.limit" 
    @PageChange="handlePageChange($event)">
    </Pager>
    <!-- 分页放到这里 -->
  </div>
</template>

<script>
import Pager from "@/components/Pager"
import fetchData from "@/mixins/fetchData.js"
import { getBlogs } from "@/api/blog"
import { formateDate } from "@/utils"
import mainScroll from "@/mixins/mainScroll.js"
import Empty from "@/components/Empty"

export default {
  mixins:[fetchData({total:0,rows:[]}),mainScroll("mainContainer")],
  components: { 
     Pager,
     Empty,
  },
 
  methods:{
    formateDate,
    handlePageChange(newPage){
      console.log("页码改变了",newPage)
      const query = {
        page:newPage,
        limit:this.routeInfo.limit
      }
      if(this.routeInfo.categoryId === -1){
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
            categoryId:this.routeInfo.categoryId
          }
        })

      }
    },
     async fetchData(){
      return await getBlogs(this.routeInfo.page,this.routeInfo.limit,this.routeInfo.categoryId)
    },
  },
  computed:{
      //获取路由信息
      routeInfo(){
        const categoryId = +this.$route.params.categoryId || -1;
        const page = +this.$route.query.page || 1;
        const limit = +this.$route.query.limit || 10;
    return {
        categoryId,
        page,
        limit,
    }
      }
  },
  watch:{
    async $route(){
      this.isLoading = true
      //滚动高度为0
      this.$refs.mainContainer.scrollTop = 0
      this.data = await this.fetchData()
      this.isLoading = false
    }
  }
}

</script>


<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 969px;
  box-sizing: border-box;
  scroll-behavior:smooth;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  font-size: 14px;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>