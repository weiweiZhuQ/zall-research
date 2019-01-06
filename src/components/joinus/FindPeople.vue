<template>
  <div class="hello">
    <div  class="text-intro">
        <p class="suojin">
           凭借卓尔集团完善强大的商业贸易生态，武汉深厚的文化底蕴及优质的人才供给资源，卓尔智联研究院致力于挖掘区块链、物联网、大数据、人工智能等技术领域的精英人才，为科技新星提供被世界发现和关注的机会，同时为集团生态提供优质人才储备。
        </p>
        <p class="finaltext">热招岗位后续更新，敬请期待</p>
      </div>
  </div>
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
.hello{
  width:100%;
   margin:auto;
   padding:20px;
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

.finaltext{
  margin:auto;
  text-align:center;
  padding:20px;
  font-size: 20px;
}
</style>