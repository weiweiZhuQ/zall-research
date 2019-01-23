<template>
  <transition name="slide-up">
  <div class="hello">
    <div  class="text-intro">
        <p class="suojin">
           蔡恒进教授受邀在第八届资产评估新发展国际论坛发表主题报告。
        </p>
        <p class="suojin">
          2018年12月8日，卓尔智联研究院执行院长蔡恒进教授受邀参加在中南财经政法大学举办的第八届资产评估新发展国际论坛并发表主题报告《人工智能对产业和企业未来的冲击》。报告以介绍人工智能技术呈指数速度发展为背景，通过介绍“触觉大脑假说”解密了意识和自我意识的起源，并引出认知坎陷的概念，在此基础上讨论了从眼球经济到坎陷经济的跨越升级，以及如何利用区块链技术的核心价值为企业、产业的未来赋能。报告紧接着协会副会长兼秘书长张国春教授之后进行，获得了在场听众的热烈反响和高度评价。
        </p>
        <p class="pbgimg"></p>
        <p class="suojin">
         本次论坛的主题是《人工智能时代的资产评估：传承与创新》，中南财经政法大学工商管理学院院长钱学峰、美国评估师协会中国委员会联席主席及中诚君和（北京）国际资产评估有限公司董事长王诚军、中企华资产评估公司总裁兼CEO刘登清等参加了此次论坛并发表演讲。
        </p>
        <div class="img">
           <!-- <p class="pbgimg1"></p>  -->
            <p class="pbgimg1"></p> 
        </div>
       
      </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '热招岗位',
       input: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.2s;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateX(100%);
}
.hello{
     width:65%;
   margin:auto;
   background-color:rgba(208,208,208,0.1);
   padding:5px 10px;
}
.text-intro{
  width:100%;
}
.title{
  font-family: Bulter,QingKe,sans-serif,SimSun; 
  font-size:20px;
  color: #25b7aa;
  margin-bottom: 20px;
}
.suojin{
  font-family: PingFangSC;
  font-size: 16px;
  color: #1b2b4f;
  line-height: 32px;
  margin-bottom: 20px;
  width:100%;
  text-indent:2em;
  text-align:justify;
  text-justify:inter-ideograph
}
.img{
  width:100%;
  display:flex;
}
.pbgimg{
  width:400px;
  margin:auto;
  height:300px;
  background:url(../../assets/bg15.jpg) no-repeat;
  background-size: cover;
}
.pbgimg1{
  width:400px;
  margin:auto;
  height:300px;
  background:url(../../assets/bg16.jpg) no-repeat;
  background-size: cover;
}

</style>
