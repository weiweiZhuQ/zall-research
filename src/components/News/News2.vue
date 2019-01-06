<template>
  <transition name="slide-up">
  <div class="hello">
    <div  class="text-intro">
        <p class="suojin">
           2018年11月8日，由卓尔智联研究院主办、腾讯云“云+创业”协办的首届Z-HACK算法创新大赛正式启动，为有志于深耕算法领域的明日之星们提供切磋技术和展示才华的舞台。此次比赛是华中地区近年来参赛规模最大、赛题赛制最专业、主办方实力最强劲的算法大赛之一。
        </p>
        <p class="pbgimg">
        </p> 
        <p class="suojin">
          本届Z-HACK算法创新大赛主要关注农贸市场价格预测以及区块链数据隐私与监管问题，并以此为真实业务场景提供重要参考。务实又切合热点的赛题设置和强大的主办及协办团队吸引了众多参赛者，报名工作异常火爆。大赛启动仅一周时间就召集了将近200支参赛队伍，有来自复旦大学、浙江大学等30多所国内外著名高校的校园达人团队，也有来自一流互联网企业的技术大牛团队。参赛者们摩拳擦掌，围绕赛题各显神通。进入决赛的队伍将于12月1日在武汉卓尔航空产业园进行最终比拼，角逐八个奖项共计15万元奖金。
        </p>
        <p class="suojin">
          主办方卓尔智联研究院是卓尔控股旗下专门研究人工智能、区块链等前沿科技的机构。卓尔控股创建于1996年，致力于打造中国最大的B2B商贸综合闭环，拥有国内最大的B2B交易平台矩阵。卓尔控股是卓尔集团(02098.HK)、中国基建港口(01719.HK)、兰亭集势(NYSE.LITB)、汉商集团(SH.600774)等4家上市公司的第一大股东。2016年，卓尔集团成功发起设立湖北首家民营银行、国内首批互联网银行——武汉众邦银行。除此之外，卓尔控股旗下还拥有卓尔棉业集团、卓尔智城集团、卓尔文旅集团、卓尔航空集团、云传媒科技、卓尔职业足球俱乐部等，年交易总额超5000亿元。
        </p>
        <p class="suojin">
          2018年，卓尔智联研究院正式成立，致力于前沿科技探索与年轻科技人员的培养与发展。目前，研究院已引进一批区块链、人工智能、物联网等领域的研究学者，在武汉大学蔡恒进教授的带领下，对多个重大前沿课题进行研究。未来，研究院的科研成果将为集团增量、提效、降成本，全方位革新和赋能B2B生态产业链的每一环。
        </p>  
        <p class="suojin">
            大赛的合作方腾讯云是全球领先的云计算服务商，为数百万企业和开发者提供安全、稳定的云主机、CDN、对象存储、域名注册、云存储、云数据库等云服务，帮助游戏、视频、通讯等行业的用户解决架构难题。“云+创业”是腾讯云面向早期创业项目提供技术和资源支持的计划，旨在服务创业全流程。自2017年上线以来，“云+创业”计划已经扶持了数以万计的创业项目，其中包括小红书、VIPKID、每日优鲜、Keep和拼多多等。 
        </p>
        <p class="pbgimg1">
        </p>   
         <p class="suojin">
            除了背景雄厚的主办方和协办方，本次大赛还邀请了企业界、学术界和资本圈的十位行业精英作为嘉宾坐镇，阵容可谓强劲。其中企业界的嘉宾代表既有齐志平、余伟等卓尔集团内部的高管，也有区块链专家everiToken创始人程希冀和人机交互专家库柏特科技创始人李淼。学术界的嘉宾代表包括武汉大学计算机学院蔡恒进教授和华中科技大学计算机学院宋恩民教授。另外，资深投资人胡植和尚静作为投资圈专业人士也将为比赛带来技术之外的视角。可以说，汇集商界、学界和投资界的豪华嘉宾团队在为比赛的专业性保驾护航之外，还将把技术领域的思想碰撞带到新的高度。可以说，阵容强劲的嘉宾是本次比赛又一大亮点。
        </p>
         <p class="suojin">
            Z-HACK算法创新大赛秉承着开放探索的理念，为全国年轻的技术爱好者们提供展示和交流的平台。通过参与比赛连接高校、科研院所、投资机构和腾讯云等多方资源，小伙伴们不仅能同台竞技，更有机会获得卓尔智联研究院以及腾讯云提供的创新、创业扶持，成为创新先行者，向技术高峰迈进！
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
  background:url(../../assets/bg2.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.pbgimg1{
  width:80%;
  margin:auto;
  height:300px;
  background:url(../../assets/bg10.jpg) no-repeat center center;
  background-size: 100% 100%;
}
</style>
