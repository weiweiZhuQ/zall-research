<template>
  <div class="page">
    <div class="topimg"></div>
    <h2>
      <div class="circl"></div>
      {{ msg }}
    </h2>
    <div class="content">
      <!-- <div class="about-nav">
        <ul>
          <li><a href="#intro">研究院简介</a></li>
          <li><a href="#leader">领导团体</a></li>
        </ul>
      </div> -->
      <div  class="text-intro">
        <p class="title">研究院简介</p>
        <p class="suojin">
          卓尔智联研究院是卓尔控股旗下专门研究人工智能、区块链等前沿技术的科技机构。2018年，卓尔智联研究院正式成立，致力于前沿科技探索与年轻科技人员的培养与发展。凭借卓尔集团完善强大的商业贸易生态，武汉深厚的文化底蕴及优质的人才供给资源，卓尔智联研究院致力于挖掘区块链、物联网等技术领域的精英人才，为科技新星提供被世界发现和关注的机会。
        </p>
        <p class="suojin">
          卓尔智联研究院由蔡恒进教授担任执行院长。蔡院长是武汉大学管理科学与工程以及软件工程等学科教授、博导，全球金融科技实验室专家顾问，中国人工智能和大数据百人会专家，中国科学院深圳先进技术研究院多媒体集成技术研究中心客座研究员，以及中科大湖北校友会会长。蔡教授多年来致力于培养顶尖的科技人才，其指导的学生团队在国际、国内竞赛中，赢得奖项近百，包括花旗杯、微软创新杯、英特尔杯、全国挑战杯、创青春等多个重量级比赛冠军。
        </p>
        <p class="suojin">
          卓尔智联研究院由尚静女士担任常务副院长，尚静女士同时为卓链资本合伙人，旨在为科技成果落地过程中的投资与孵化提供方向的指导和资本助力。
        </p>
        <p class="suojin">
          目前，卓尔智联研究院已引进一批区块链、人工智能、物联网等领域的研究学者，在蔡恒进院长的带领下，对多个重大前沿课题进行研究。未来，研究院将不断培养科技菁英人才，科研成果将为集团、为社会真正创造价值，全方位革新和赋能B2B生态产业链的每一环。
        </p>    
      </div>
      <div class="leaders">
        <p class="title">领导团体</p>
        <div class="leader">
          <div v-for="(item,index) in leaders" :key="index" class="lead-top">
            <div class="item-top">
              <div class="pic">
                <div class="left">
                  <img :src="item.img"/>
                </div>
                <div class="name">{{item.name}}</div>
              </div>
               <p class="brief">{{item.brief}}</p>
            </div>    
          </div>
        </div>
      </div>
      <p class="title">组织结构</p>
      <p class="suojin">
          知识产权办公室，创新实验室，产品办公室，综合办公室
      </p>  
      <p class="pbgimg1">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '关于我们',
      leaders:[{img:require('../../assets/cai.jpg'),name:'蔡恒进',brief:'卓尔智联研究院院长，武汉大学计算机学院教授'},
      {img:require('../../assets/sj.jpg'),name:'尚静',brief:'卓链资本创始合伙人,卓尔智联研究院常务副院长'}]
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topimg{
  width:100%;
  height:400px;
  background:url(../../assets/lb1.png) no-repeat center center; 
  /* background:url(https://g.alicdn.com/atastatic/s/damo/css/img/about-workplace.jpg) no-repeat center center; */
  background-size:100% 100%;
}
h2{
  width:65%;
  height: 50px;
  line-height:50px;
  border-bottom:2px solid #e6e6e6;
  padding:20px;
  color:#25b7aa;
  font-size:20px;
  margin:auto;
}
.circl{
  width:29px;
  height: 27px;
  background:url(../../assets/two.png) no-repeat center center;
  background-size:100% 100%;
  display:inline-block;
  vertical-align: middle;
}
.content{
   width:65%;
   padding:20px;
   margin:auto;
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
}
.leaders{
  width:100%;
  /* box-shadow: 10px 10px 5px #ccc; */
}
.leader{
  width:100%;
  padding: 16px;
  margin-bottom: 24px;
}
.lead-top{
  width:45%;
  background:url(../../assets/albg.png) no-repeat center center;
  background-size:100% 100%;
  display:inline-block;
  margin: 10px;
  margin-bottom: 24px;
  -webkit-box-shadow: 5px 5px 5px #ccc;
  -moz-box-shadow: 5px 5px 5px #ccc;
  box-shadow: 5px 5px 5px #ccc;

}   
.item-top{
  margin-bottom: 20px;
}
.pic {
  position: relative;
  width: 100%;
  padding: 5px;
}
.left{
  position: relative;
  width: 40%;
  height: 0;
  padding-bottom: 40%;
}
.left img{
  position:  absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius:50%;
}
.name{
  position: absolute;
  width:50%;
  left:80%;
  top:50%;
  transform: translate(-50%,-50%);  
  font-size: 25px;
  color: #1b2b4f;
  font-family: PingFangSC;
}
.brief{
  min-height: 50px;
  opacity: .8;
  font-size: 16px;
  color: #1b2b4f;
  letter-spacing: 0;
  line-height: 24px;
  border-top: 1px solid #25b7aa;
  padding-top: 12px;
  padding-left: 5px;
  font-family: PingFangSC;
}
.pbgimg1{
  width:80%;
  margin:auto;
  height:300px;
  background:url(../../assets/organize1.png) no-repeat center center;
  background-size: 100% 100%;
}
</style>
