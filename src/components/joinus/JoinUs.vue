<template>
  <div class="hello">
   <div class="topimg"></div>
    <h2>
      <div class="circl"></div>
      {{ msg }}
    </h2>
    <div class="content">
      <div class="joinus-nav">
        <ul type="none">
          <li @click="skipTo('plan')" :class="{isActive:active1}"><i class="el-icon-share"></i>菁英培养计划</li>
          <li @click="skipTo('findPeople')" :class="{isActive:active2}"><i class="el-icon-share"></i>热招岗位</li>
        </ul>
      </div> 
      <div class="joinus-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '加入我们',
      active1:true,
      active2:false,
    }
  },
  computed:{
    // noactive:function(){
    //   return !this.active;
    // }
  },
  methods:{
    skipTo(item){
      if(item=='plan'){
        this.active1=true;
        this.active2=false;
        this.$router.push({ path: '/joinus/plan' });
      }else if(item=='findPeople'){
        this.active1=false;
        this.active2=true;
        this.$router.push({ path: '/joinus/findpeople' });
      }
    },
    activeIndex1(){
      console.log('wofgg');
      console.log('this.$route.query',this.$route.query)
      var index=this.$route.query.activeIndex1;
      console.log('index',index);
      if(index=='one'){
        console.log('1')
        this.active1=true;
        this.active2=false;
        // this.$router.push({ path: '/plan' });
      }else if(index=='two'){
        console.log('2')
        this.active1=false;
        this.active2=true;
        // this.$router.push({ path: '/findpeople' });
      }
    },
    activeIndex2(index){
      console.log('tangmeiqi');
      console.log('index2',index);
  
      if(index=='one'){
        console.log('1')
        this.active1=true;
        this.active2=false;
        // this.$router.push({ path: '/plan' });
      }else if(index=='two'){
        console.log('2')
        this.active1=false;
        this.active2=true;
        // this.$router.push({ path: '/findpeople' });
      }
    }
  },
  mounted:function(){
    this.$root.eventHub.$on('toUpDate',this.activeIndex2);
  },
  beforeRouteEnter(to, from, next) {
        next(vm => {
           vm.activeIndex1()
        });
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topimg{
  width:100%;
  height:456px;
  background:url(../../assets/planbg.png) no-repeat center center;; 
  /* background:url(https://g.alicdn.com/atastatic/s/damo/css/img/about-workplace.jpg) no-repeat center center; */
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
.circl{
  width:29px;
  height: 27px;
  background:url(../../assets/two.png) no-repeat center center;
  background-size:100% 100%;
  display:inline-block;
  vertical-align: middle;
}
.content{
   width:85%;
   min-height:500px;
   margin:auto;
   display:flex;
}
.joinus-nav{
   width:20%;
   padding-top:40px;
   font-size:20px;
  color: #1b2b4f;
  line-height: 32px;
  margin-bottom: 20px;
   min-height:800px; 
}
.joinus-nav li{
  border-bottom:1px solid #ccc;
}
.joinus-nav li:hover{
  cursor:pointer;
  /* color:#25b7aa; */
}
.joinus-content{
  width:70%;
  border-left:1px solid #ccc;
  padding-left:10px;
  
}
.isActive{color:#25b7aa;}
.notActive{color:#1b2b4f;}
</style>
