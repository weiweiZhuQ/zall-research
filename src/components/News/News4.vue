<template>
  <transition name="slide-up">
  <div class="hello">
    <div  class="text-intro">
        <p class="suojin">
           2018年12月19日，北京大学博古睿研究中心成立仪式在北京大学教育基金会成功举办，卓尔智联研究院执行院长蔡恒进教授、常务副院长尚静女士受邀参加成立仪式。
        </p>
        <p class="pbgimg1">
        </p>
        <p class="suojin">
          博古睿研究院（Berggruen Institute）为独立无党派智囊库，位于美国洛杉矶，由尼古拉斯·博古睿（Nicolas Berggruen）于2010年成立。尼古拉斯·博古睿，资深投资人、21世纪理事会创始人、博古睿研究院主席，身价25亿美元的富豪，被人称为“商界奇才” 。博古睿研究院一直致力于将各个文化学科中最顶尖的学者和最权威的声音汇聚在一起，来探讨从全球化管理到在日新月异的科技面前对人性的思考等我们时代最根本的问题 。
        </p>
        <p class="pbgimg2">
        </p>
        <p class="suojin">
          博古睿研究院设置并颁出被称为“哲学界的诺贝尔奖”之称的博古睿奖，旨在奖励对塑造人类自我认识和推动人类进步产生了广泛影响的思想家。该奖项寻求和鼓励古代“智慧之爱”所推崇的哲学和18世纪时代对人类知识全方位的探求。该奖项的得主需对不同文明的社会实践和大众生活都产生了深远的影响。
        </p>
        <p class="suojin">
          中国哲学萌芽于殷周之际，成型于春秋末期，有着3000年的悠久历史。现代的中国哲学界依旧有着浓厚的探索氛围。2018年5月2日，习近平主席于北京大学看望了博古睿学者、美国籍的汉学大师安乐哲等哲学教授，并对他们培养中国优秀的哲学人才做出的积极贡献做出了充分肯定。此次博古睿研究院在中国设置北京大学博古睿研究中心，既是对中国哲学发展进化的转折点，也是中西方哲学思想交融的汇合点。
        </p> 
        <p class="pbgimg3">
        </p>
        <p class="suojin">
          蔡恒进教授在哲学领域有着深入的探索。其创建了自我肯定需求理论，提出了触觉大脑假说和认知坎陷三大定律。以自我和外界的剖分作为意识和智能的开端，将人对自我边界以外世界的理解看作一个开放、未完成的系统，并将其抽象为与原子世界相对应的坎陷世界，为类脑思维的物理模型的建立提供了新的方向。
        </p> 
        <p class="pbgimg4">
        </p>
        <p class="suojin">
          卓尔智联研究院不仅有着深厚的科学技术底蕴，更是有着浓郁的人文哲学氛围。蔡恒进院长指出，我们培养出的人才不仅需要有独当一面的科学技能，更需要有着独立思考的健全人格。
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
.pbgimg1{
  width:80%;
  margin:auto;
  height:300px;
  background:url(../../assets/bg11.jpg) no-repeat center center;
  background-size: cover;
}
.pbgimg2{
  width:80%;
  margin:auto;
  height:300px;
  background:url(../../assets/bg13.jpg) no-repeat center center;
  background-size: cover;

}
.pbgimg3{
  width:80%;
  margin:auto;
  height:350px;
  background:url(../../assets/bg12.jpg) no-repeat;
  background-size: cover;
}
.pbgimg4{
  width:70%;
  margin:auto;
  height:500px;
  background:url(../../assets/bg14.jpg) no-repeat center center;
  background-size: cover;
}
</style>
