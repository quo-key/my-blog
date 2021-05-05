<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
    home:'icon-zhuye',
    success:'icon-Group-',
    error:'icon-cuowu',
    close:'icon-guanbi',
    warn:'icon-jinggao',
    info:'icon-xinxi',
    blog:'icon-blog',
    code:'icon-code',
    about:'icon-guanyu',
    weixin:'icon-weixin',
    mail:'icon-emailFilled',
    github:'icon-github',
    qq:'icon-qq',
    arrowUp:'icon-xiangshang',
    arrowDown:'icon-xiangxia1',
    empty:'icon-kongbai',
    chat:'icon-liuyan',
    project:"icon-xiangmu"

}
export const types = Object.keys(classMap)
export default {
      props:{
          type:{
              type:String,
              required:true
          },
      },
      computed:{
          fontClass(){
              return classMap[this.type]
          }
      }
}
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_1897508_dvg0a5sif.css");

</style>