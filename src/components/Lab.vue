<template>
  <div class="page">
    <div class="topimg"></div>
    <h2>
      <div class="circl"></div>
      {{ msg }}
    </h2>
    <div class="content">
      <div  class="text-intro">
        <p class="title">实验室简介</p>
        <p class="suojin">
          卓尔智联研究院设有创新实验室，关注并致力于区块链、产业互联网、物联网、大数据、人工智能等技术领域自主知识产权的创新创意研究与实现。
        </p>         
      </div> 
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
      msg: '创新实验室',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topimg{
  width:100%;
  height:400px;
  background:url(../assets/lb2.png) no-repeat center center; 
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
  background:url(../assets/two.png) no-repeat center center;
  background-size:100% 100%;
  display:inline-block;
  vertical-align: middle;
}
.content{
   width:65%;
   padding:20px;
   margin:auto;
   min-height: 600px;
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
  background:url(https://img.alicdn.com/tfs/TB1xUlcxnCWBKNjSZFtXXaC3FXa-1920-886.png) no-repeat center center;
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
  width:60%;
  margin:auto;
  height:350px;
  background:url(../assets/lab1.png) no-repeat center center;
  background-size: 100% 100%;
}
</style>
