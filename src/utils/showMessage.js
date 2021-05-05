/**
 * 
 * @param {String} content 消息内容
 * @param {string} type 消息类型   info error success warn
 * @param {HTMLElement} container  容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 * @param {number} duration 多久后消失
 */
import getComponent from "./getComponent"
import Icon from "@/components/Icon"
import styles from "./showMessage.module.less"


export default function(options = {}){
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    const div = document.createElement("div")
    const iconDom = getComponent(Icon,{
        type,
    })

    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}<div>`
    const typeClassName = styles[`message-${type}`]
    div.className = `${styles.message} ${typeClassName}`
    console.log(div)
    if(!container){
        container = document.body
    }else{
        if(getComputedStyle(container).position === "static"){
            container.style.position = "relative"
        }
    }
    container.appendChild(div)
    div.clientHeight;//强行渲染
    div.style.opacity = 1
    div.style.transform = `translate(-50%,-50%)`


    //等一段时间消失
    setTimeout(() => {
        div.style.opacity = 0
        div.style.transform = `translate(-50%,-50%) translateY(-20px)`
        div.addEventListener("transitionend",function(){
            div.remove()
            options.callback && options.callback();
        },{
            once:true
        })
    }, duration);
}