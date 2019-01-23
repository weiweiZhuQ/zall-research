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
          卓尔智联研究院（Zall Research Institute of Smart Commerce）是卓尔控股旗下专门研究人工智能、区块链等前沿技术的科技机构。2018年，卓尔智联研究院正式成立，致力于前沿科技探索与年轻科技人员的培养与发展。
        </p>
        <p class="suojin">
          凭借卓尔集团完善强大的商业贸易生态，武汉雄厚的科教实力及优质的人才供给资源，卓尔智联研究院致力于挖掘并培养区块链、工业互联网、大数据、人工智能、物联网等技术领域的精英人才，为科技新星提供被世界发现和关注的机会。
        </p>
        <p class="suojin">
          在B2B领域，短期内不可能实现通用人工智能（AGI）。“术业有专攻”，人类的高级智能并非是通用的，虽然大多数人具有相似的常识，但人类个体的智能具有专业性。在部分细分的专业领域已经实现了强人工智能，机器已然超越人类，例如AlphaZero能够打败人类棋手冠军，AlphaFold能够完胜人类进行蛋白质折叠的预测，等等。
        </p>
        <p class="suojin">
          To C业务（B2C、C2C）是典型的大数据应用场景，但在大多数B2B业务中，并没有海量数据，B2B在智能化、信息化、互联网化仍有极大的上升空间，更需要引入人工智能技术对相对小体量的数据进行有效分析。
        </p>  
        <p class="suojin">
          5G技术的出现也为人类的未来赋予了新机遇，超快速、稳定的数据传输，使得远程实时分身技术成为可能，势必将为我们未来的生活和工作方式带来前所未有的便利与变化。
          区块链技术的核心价值在于存证（proof of existence）与通证（token），不可篡改的记录使得信用和价值得以有效传播，极大地提升交易、投资等工作的效率和可信度。
        </p> 
        <p class="suojin">
          卓尔智联研究院旨在融合区块链、大数据、人工智能技术并应用于B2B领域，科研成果将为集团、社会真正创造价值，从科技与创新方面为卓尔从商业驱动平稳过渡到商业、科技双轮驱动，最终实现科技驱动贡献力量。助力实现智慧物流与仓储，全方位革新和赋能B2B生态产业链每一环，颠覆传统交易方式，重构未来商业模式，以人工智能和区块链技术打造B2B商脉（discover the first principle for B2B）。
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
          知识产权办公室，产品办公室，创新实验室，综合办公室
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
      {img:require('../../assets/sj.jpg'),name:'尚静',brief:'卓链资本创始合伙人，卓尔智联研究院常务副院长'}]
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topimg{
  width:100%;
  height:456px;
  background:url(../../assets/lb1.png) no-repeat center center; 
  /* background:url(https://g.alicdn.com/atastatic/s/damo/css/img/about-workplace.jpg) no-repeat center center; */
  background-size:cover;
}
h2{
  width:65%;
  /* height: 50px; */
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
  text-indent:2em;
  text-align:justify;
  text-justify:inter-ideograph
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
  width:623px;
  margin:auto;
  height:320px;
  background:url(../../assets/organize2.png) no-repeat center center;
  background-size: cover;
}
</style>
