<template>
  <transition name="slide-up">
  <div class="hello">
    <div  class="text-intro">
        <p class="suojin">
           近日，在刚刚落幕的首届Z-HACK算法创新大赛的决赛中，两位来自华中科技大学的萌妹子所组成的Hello World战队在主赛道中一举夺魁！区块链专项赛道的创客奖则由来自武汉大学金融信息实验室的信链团队摘取。
        </p>
        <p class="pbgimg">
        </p> 
        <p class="suojin">
          首届Z-HACK算法创新大赛由卓尔智联研究院主办，卓尔航空、卓尔文旅、卓链资本、腾讯云“云+创业”、光谷社区共同协办，携手算法最强大脑与行业内知名学术、技术专家，以“农贸市场价格预测”为主赛道，以“区块链数据隐私与监管问题”为专项赛道，为业界带来一场算法竞技盛宴，助力B2B领域专业化发展的同时，也推动行业技术的进步。 
        </p>
        <p class="suojin">
         比赛分为初赛和决赛两轮，十五天的简洁赛程和十五万的高额奖金，吸引了来自全球150多支队伍报名参赛，覆盖了高丽大学（韩国）、千叶大学（日本）、武汉大学、复旦大学、浙江大学、华中科技大学、哈尔滨工业大学等近50所海内外一流高校学子，还有来自阿里巴巴、京东等一流互联网企业的技术团队，以及来自中科院研究所的科研人员等一同参赛，是华中地区近年来参赛规模最大、赛题赛制最专业、主办方实力最强劲的算法大赛之一。
        </p>
        <p class="pbgimg1">
            <!-- <img  class="bgimg" src="../../assets/bg3.jpg"/> -->
        </p> 
         <p class="suojin">
         寻找算法新锐，引领B2B行业创新升级
        </p>
        <p class="suojin">
          
          基于大数据的算法在改变人们生活的同时，也正在交易和供应链领域发挥威力。卓尔控股有限公司董事长、卓尔智联集团董事局联席主席阎志表示，卓尔企业和武汉市的发展都十分需要算法等新技术应用型人才。目前卓尔正在筹建卓尔智联研究院、卓尔宇航研发中心、卓尔棉纺研究中心三大研究院，正从商务驱动转变为技术、商务双轮驱动。武汉拥有雄厚的科教人才优势，并已制定了一些列的人才政策，人才优势不断显现，而新技术应用型人才已成为了吸引大量新技术、新科技型企业落户武汉的纽带。
        </p>  
        <!-- <p class="suojin">
            <img  class="bgimg" src="../../assets/bg1.jpg"/>
        </p>   -->
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
.pbgimg{
  width:70%;
  margin:auto;
  height:350px;
  background:url(../../assets/bg3.jpg) no-repeat;
  background-size: cover;
}
.pbgimg1{
  width:75%;
  margin:auto;
  height:350px;
  background:url(../../assets/bg2.jpg) no-repeat center center;
  background-size: cover;
}
/* .bgimg{
   width:80%;
   height:30%;
   margin:auto;
} */
</style>
