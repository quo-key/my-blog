<template>
  <div class="blog-comment-container">
   <MessageArea 
   title="评论列表" 
   :subTitle="`(${data.total})`" 
   :list="data.rows" 
   :isListLoading="isLoading"
   @submit="handleSubmit"
   >
   </MessageArea>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea"
import fetchData from "@/mixins/fetchData"
import { getComments, postComment } from "@/api/blog"
export default {
    mixins:[fetchData({total:0,rows:[]})],
    components:{
        MessageArea,
    },
    data(){
        return{
            page:1,
            limit:10
        }
    },
    created(){
        // window.fetchMore = this.fetchMore
        this.$bus.$on("mainScroll",this.handleScroll)
    },
    destroyed(){

        this.$bus.$off("mainScroll",this.handleScroll)
    },
   
    methods:{
        async handleScroll(dom){
            if(this.isLoading || !dom){
                //目前正在加载更多
                return
            }
            const range = 100 //定义一个可接受范围
            const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
            // console.log(dec)
            if(dec <= range){
               this.fetchMore()
            }
        },
        async fetchData(){
           return await getComments(this.$route.params.id,this.page,this.limit)
        },
        //加载下一页
        async fetchMore(){
            if(!this.hasMore){
                return
            }
           this.isLoading = true
           this.page ++ 
           let resp = await this.fetchData()
           this.data.total = resp.total
           this.data.rows = this.data.rows.concat(resp.rows)
           this.isLoading = false
        },
        async handleSubmit(formData,callback){
           const resp = await postComment({
                blogid:this.$route.params.id,
                ...formData,
            })
            this.data.rows.unshift(resp)
            this.data.total ++;
            callback("成功了")
        }
        
    },
     computed:{
       hasMore(){
           return this.data.rows.length < this.data.total
       }
    },
}
</script>

<style>

</style>