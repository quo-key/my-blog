import eventBus from "@/eventBus"
import {debounce} from "@/utils"
import defaultGif from "@/assets/default.gif"
let images = []

function setImage(img){
   img.dom.src = defaultGif;//先暂时使用默认图片
   const clientHeight = document.documentElement.clientHeight
   const rect = img.dom.getBoundingClientRect()
   const height = rect.height || 150
   if(rect.top >= -height && rect.top <= clientHeight){
       //在视口范围内
    //    console.log(img.dom.src,img.src,"在视口",images)
       img.dom.src = img.src
    //    console.log("加载真实图片",img.dom,images)
       images = images.filter(i => i!==img)
   }
}
function setImages(){
    for(const img of images){
        //处理该图片
        setImage(img)
    }
}

function handleScroll(dom){
    setImages()
}

eventBus.$on("mainScroll",debounce(handleScroll,50))

export default {
    inserted(el,bindings){
        const img = {
            dom:el,
            src:bindings.value,

        }
        images.push(img)
        setImage(img)
    },
    unbind(el){
       images = images.filter(img => img.dom !== el)
    }
}