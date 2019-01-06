<template>
  <div class="pages">
    <p class="big-title">卓尔智联研究院菁英人才培养计划介绍</p>
    <p class="finaltext">即将发布</p>
  </div>
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
.pages,p{
  width:100%;
}
.big-title{
  font-size:18px;
  /* font-weight:bold; */
  margin:auto;
  text-align:center;
  padding-top:5px;
  padding-bottom:5px;
}

.finaltext{
  margin:auto;
  text-align:center;
  padding:20px;
  font-size: 20px;
}
</style>
