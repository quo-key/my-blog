import axios from "axios"
import showMessage from "../utils/showMessage"

const ins = axios.create();//创建一个axios的实例

ins.interceptors.response.use(function(resp){
    // console.log("拦截器")
    // console.log(resp)
    return resp.data.data
})

export default ins