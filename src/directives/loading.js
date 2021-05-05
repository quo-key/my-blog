import loadingURl from "@/assets/loading.svg"
import styles from "./loading.module.less"
//得到el中loading效果的img元素
function getLoadingImg(el){
   return el.querySelector("img[data-role=loading]")
}

function createImg(){
    const img = document.createElement('img')
    img.dataset.role = "loading" 
    img.src = loadingURl
    img.className = styles.loading
    return img
}



export default function(el,binding){
    //根据 binding.value的值，创建或删除img元素
    const curImg = getLoadingImg(el)
    if(binding.value){
        //创建
        if(!curImg){
           const img = createImg()
           el.appendChild(img)
        }
    }else{
        //删除
        if(curImg){
            curImg.remove()
        }
    }
}
    