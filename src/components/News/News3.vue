<template>
  <transition name="slide-up">
  <div class="pages">
    <p class="big-title">卓尔智联研究院菁英人才培养计划介绍</p>
    <!-- <p class="sub-title">（一）培养背景</p> -->
    <p class="text">中国近几十年大师十分稀缺，未来教育对大师有强大的需求。“山不在高，有仙则名。水不在深，有龙则灵。”决定大学和研究院质量的是大师级的教学资源，而非学院的建筑。</p>
    <p class="text">莫扎特4岁开始作曲，25岁就已经谱写了许多流传至今的经典作品。海森堡26岁就提出“不确定性原理”，31岁获得诺贝尔物理学奖。托瓦兹（Linus Torvalds）21岁编写出Linux操作系统雏形。V神（Vitalic Buterin）21岁创办以太坊，至今三年过去，已然成为全球第二大数字加密货币。维特根斯坦30岁出头就在哲学界崭露头角。</p>
    <p class="text">20世纪初，量子力学伊始，以丹麦物理学家波尔为首开创了哥本哈根学派，海森堡、泡利以及狄拉克等都是主要成员。哥本哈根学派可谓“群星璀璨”，并且成员大多非常年轻，他们对量子力学的创立和发展做出了杰出贡献，对量子力学的解释被称为“正统解释”。</p>
    <p class="text">现如今，ABCD（AI人工智能，Blockchain区块链，Cloud Computing云计算，Big Data大数据）技术的迅猛发展，使得人类认知世界的能力得到了极大提升，我们相信，如果开创适宜的教育新范式，不远的将来也会出现“群星璀璨”的局面，这是我们对成立卓尔创新研究院所处的时代背景的判断。</p>
    <p class="text">卓尔创新研究院的成立一方面是为卓尔培养并储备高精尖人才，另一方面也为有实力的学子提供快速实践、实现自我价值的广阔平台，此外在培养过程中引入的导师们也收获了优秀的学生，这为大家提供了创造多赢的机会。</p>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是AboutUS的简介界面',
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
.pages{
  margin:auto;
  width:65%;
  background-color:rgba(208,208,208,0.1);
  padding:5px 10px;
}
.big-title{
  font-size:18px;
  font-weight:bold;
  margin:auto;
  text-align:center;
  padding-top:5px;
  padding-bottom:5px;
}
.text,.sub-title{
  font-family: PingFangSC;
  font-size: 16px;
  color: #1b2b4f;
  line-height: 32px;
  margin-bottom: 20px;
}
.text{
  text-indent:2em;
  text-align:justify;
  text-justify:inter-ideograph
}
.sub-title{
  font-weight:bold;
  margin:auto;
}
table{
 width:100%;
 border:1px solid #ccc;
 border-collapse:collapse;
 font-family: PingFangSC;
  font-size: 16px;
  color: #1b2b4f;
  line-height: 32px;
  margin-bottom: 20px;
 
}
table td{
 border:1px solid #ccc;
 text-align:left;
 padding:5px; 
}
.first-line{width:10%;}
.second-line{width:30%;}
.third-line{width:20%;}
.fourth-line{width:30%;}
</style>
