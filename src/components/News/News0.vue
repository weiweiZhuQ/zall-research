<template>
  <transition name="slide-up">
  <div class="hello">
    <div  class="text-intro">
        <p class="suojin">
           卓尔智联研究院院长蔡恒进教授受邀参加第五届中国互联网金融发展战略研讨会，并担任8日下午 “云计算助力金融数字化转型” 专场的主持人与点评人。
        </p>
        <p class="suojin">
          第五届中国互联网金融发展战略研讨会定于2018年11月7日至9日在武汉举行。会议旨在进一步推动互联网与金融的深度融合，探索金融科技的创新前景及可持续发展路径，切实发挥金融科技服务金融改革和实体经济的积极作用。
        </p>
        <p class="suojin">
          参与单位包括：中国人民银行科技司；中国互联网金融协会、中国支付清算协会；中国人民银行金融信息中心、中国人民银行清算总中心、中国人民银行分支机构、中国金融电子化公司；中国银联、大型国有商业银行、中国邮政储蓄银行、全国性股份制商业银行、城市商业银行、农村金融机构、农信银资金清算中心、城市商业银行资金清算中心、民营银行；非银行支付机构、互联网企业；国内外互联网经济、互联网金融研究机构；国内外金融科技产业供应商。
        </p>
        <p class="suojin">
          大会分为5个主题研讨议题，包括：数字化战略规划及转型实践，云计算助力金融数字化转型，AI大数据与数字化智慧金融，网络信息安全与风险管理，金融科技服务实体经济助力普惠金融，共建共享金融科技合作生态。
        </p>  
        <p class="pbgimg">
        </p> 
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
   padding:20px;
   margin:auto;
   background-color:rgba(208,208,208,0.1);
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
.pbgimg{
  width:80%;
  margin:auto;
  height:300px;
  background:url(../../assets/bg1.jpg) no-repeat center center;
  background-size: 100% 100%;
}
</style>
