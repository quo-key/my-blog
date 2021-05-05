<template>
  <div class="contact-container">
      <li>
          <a href="">
              <div class="icon-item">
                  <Icon :type="'github'"></Icon>
              </div>
              <span>{{data.githubName}}</span>
          </a>
          <div class="pop"></div>
      </li>
      <li>
          <a href="">
              <div class="icon-item"><Icon :type="'mail'"></Icon></div>
              <span>{{data.mail}}</span>
          </a>
          <div class="pop"></div>
      </li>
      <li>
          <a href="">
              <div class="icon-item"><Icon :type="'qq'"></Icon></div>
              <span>{{data.qq}}</span>
          </a>
          <div class="pop"></div>
      </li>
      <li>
          <a href="">
              <div class="icon-item"><Icon :type="'weixin'"></Icon></div>
              <span>{{data.weixin}}</span>
          </a>
          <div class="pop4">
              <img :src="data.weixinQrCode" alt="">
          </div>
      </li>
     <!-- <div class="icon-item"><Icon :type="'github'"></Icon><label>DuYi-Edu</label></div>
     <div class="icon-item"><Icon type="mail"></Icon><label>duyi@gmail.com</label></div>
     <div class="icon-item"><Icon type="qq"></Icon><label>846129417</label></div>
     <div class="icon-item"><Icon type="weixin"></Icon><label>18767514825</label></div> -->
  </div>
</template>

<script>
import Icon from "@/components/Icon"
import { mapState } from "vuex"
export default {
  components:{
      Icon,
  },
  computed:mapState("setting",["data"])
  
}
</script>

<style lang="less" scoped>
@import url("~@/styles/mixin.less");
@import url("~@/styles/var.less");
.contact-container{
    // padding: 20px;
    padding: 40px 0;
    width: 100%;
    background-color:inherit ;
    color: @gray;
    @itemHeight:30px;
    // .self-center();

    li{
        position: relative;
        height: @itemHeight;
        line-height:30px;
        margin: 14px 0;
        &:hover{
            .pop4{
                transform: scaleY(1);//原始大小
            }
        }
    }
    a{
        display: flex;
        align-items: center;
        margin: 0 20px;
        cursor: pointer;
    }
    .icon-item{
      font-size: 26px;
      width:30px;
    }
    .pop4{
        position:absolute;
        left: 0;
        bottom: @itemHeight;
        border-radius:5px;
        transform: scaleY(0); //放大
        transform-origin:center bottom ;//x为中心，y为底部
        transition: 0.3s;
        img{
            width: 150px;
            height: 150px;
            border-radius:5px;
        }
        margin: 3px 15px;
        background-color:white ;
        &::after{
            content:"";
            position: absolute;
            left: 50%;
            bottom:-4px;
            transform: translateX(-50%) rotate(45deg);
            width: 8px;
            height: 8px;
            background-color:inherit ;
        }
    }
}

</style>>

