//公共的远程获取数据的代码

export default function(defaulDtaValue = null){
    return {
        data(){
            return{
                isLoading:true,
                data:defaulDtaValue
            }
        },
         async created(){
         this.data = await this.fetchData()
         this.isLoading = false
        //  console.log(this.data)
        }
    }
}