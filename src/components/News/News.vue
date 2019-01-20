<template>
  <div class="page">
    <div class="topimg"></div>
    <h2>
      <div class="circl"></div>
      {{ msg }}
    </h2>
    <div class="newscontent">
      <router-view/>
    </div>
    
    <div class="footer">

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '实时新闻',
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topimg{
  width:100%;
  height:400px;
  background:url(../../assets/newsbg.jpg) no-repeat center center; 
  background-size:cover;
}
h2{
  width:85%;
  /* height: 50px; */
  line-height:50px;
  border-bottom:2px solid #e6e6e6;
  padding:20px;
  color:#25b7aa;
  font-size:20px;
  margin:auto;
}
.footer{
  width:100%;
  height: 30px;
  /* background:url(https://img.alicdn.com/tfs/TB1xUlcxnCWBKNjSZFtXXaC3FXa-1920-886.png) no-repeat center center; */
}
</style>
