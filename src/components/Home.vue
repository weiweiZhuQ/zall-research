<template>
  <div class="pages">
  <div class="swiper">
   <el-carousel :interval="3000" arrow="always" height="456px">
    <el-carousel-item v-for="(item,index) in sliderImg" :key="index">
      <div class ="sliderImg" :style="{backgroundImage:'url(' + item.url + ')'}"></div>
    </el-carousel-item>
  </el-carousel>
  </div>
   <div class="content">
      <div class="homeNews">
        <div class="NewsTop">
        <span class="firstspan">新闻</span>
        <span class="twospan" @click="linkToNew3()">More</span>
        </div>
        <div class="newscontent">
          <ul class="contentul" >
            <li v-for="(item,index) in newsData" :key="index" class="news-top">
              <div class="item-top">
                  <div class="pic">
                    <div class="left">
                      <img :src="item.img"/>
                    </div>
                    <div class="name" @click="linkToNew1(index)">{{item.name}}</div>
                    <p class="brief">{{item.brief}}</p>
                  </div>  
                </div>
            </li>
          </ul>
          <ul>
            <li v-for="(item,index) in newsData1" :key="index" class="shortnew" @click="linkToNew2(index)">
              {{item.text}}
            </li>
          </ul>
        </div>
      </div>
      <div class="comIntro">
        <div class="IntroTop">
        <span class="Introfirstspan">公司简介</span>
        <span class="Introtwospan" @click="linkToNew4()">More</span>
        </div>
        <div class="introcontent">
          <p>卓尔智联研究院是卓尔控股旗下专门研究人工智能和区块链等前沿技术的科技机构。2018年，卓尔智联研究院正式成立，致力于前沿科技探索与年轻科技人员的培养与发展。凭借卓尔集团完善强大的商业贸易生态，武汉深厚的文化底蕴及优质的人才供给资源，卓尔智联研究院致力于挖掘区块链和物联网等技术领域的精英人才，为科技新星提供被世界发现和关注的机会。</p>
        </div>
      </div>
    </div>
     <div class="contentright">
      <div class="text">科技引领未来!</div>
      <div class="en-text">Research for Solving Problems with Profit and Fun</div>
      <div class="sub-text">卓尔智联研究院是卓尔控股旗下专门研究人工智能、区块链等前沿技术的科技机构。致力于挖掘区块链、物联网等技术领域的精英人才，为科技新星提供被世界发现和关注的机会。</div>  
   </div>
  </div>
</template>

<script>
import { scrollAnimation } from './donhua.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      sliderImg:[{url:require('../assets/lb3.png')},
      {url:require('../assets/planbg.png')},
      {url:require('../assets/lb2.png')}],
      newsData:[{img:require('../assets/bg1.jpg'),name:'【简讯】卓尔智联研究院院长受邀主持第五届中国互联网金融发展战略研讨会“云计算助力金融数字化转型”专场',brief:' 卓尔智联研究院院长蔡恒进教授受邀参加第五届中国互联网金融发展战略研讨会，并担任8日下午 “云计算助力金融数字化转型” 专场的主持人与点评人。'}
     ],
     newsData1:[{text:'首届Z-HACK算法创新大赛落幕！萌妹子战队斩获冠军~'},
     {text:'腾讯云“云+创业”助力Z-HACK算法创新大赛'},
     {text:'卓尔智联研究院执行院长蔡恒进教授、常务副院长尚静女士受邀参加北京大学博古睿研究中心成立仪式',brief:'北京大学博古睿研究中心成立仪式在北京大学教育基金会成功举办，卓尔智联研究院执行院长蔡恒进教授、常务副院长尚静女士受邀参加成立仪式'},
     ]
    }
  },
  methods:{
    linkToNew1(index){
      if(index=='0'){
        this.$router.push({ path: '/news0' });
      }
    },
    linkToNew2(index){
      switch(index){
        case 0:{
          this.$router.push({ path: '/news1' });
          break;}
        case 1:{this.$router.push({ path: '/news3' });break;}
        case 2:{this.$router.push({ path: '/news4' });break;}
      }
    },
    linkToNew3(){
      this.$router.push({ path: '/newscontent' });
    },
    linkToNew4(){
      this.$router.push({ path: '/aboutus' });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0px;
  padding:0px;
}
  .sliderImg{
    width:100%;
    height:100%;
    background-repeat: no-repeat;
    background-size:100% 100%;
  }
  .content{
    width:100%;
    min-height:400px;
    background:url(../assets/albg.png) no-repeat center center; 
    background-size:100% 100%;
    padding-top:20px; 
    /* text-align:center;  */
    /* padding-left:10px; */
     display:flex; 
  }
  .text{
    text-align:center; 
    font-size: 32px;
    color: #1b2b4f;
    letter-spacing: 2px;
    line-height: 32px;
    margin-bottom: 21px;
    text-transform: uppercase;
    font-family: Verdana,Sans-serif;
    
  }
  .en-text{
     text-align:center; 
    font-size: 22px;
    color: #1b2b4f;
    letter-spacing: 0;
    line-height: 22px;
    margin-bottom: 31px;
    font-family: Bulter;
    text-align:center;
    margin:auto;
  }
  .sub-text{
     text-align:center; 
    opacity: .8;
    font-size: 18px;
    color: #2a333f;
    letter-spacing: 0;
    line-height: 32px;
    font-family: PingFangSC;
    padding:10px 10%;
  }
.homeNews{
  width:50%;
  padding-left:10px;
}

.NewsTop{
  width:100%;
  height: 32px;
  color: #25b7aa;
  line-height: 32px;
  border-bottom: solid 1px #e4e4e4;
  margin-bottom: 15px;
  padding-left: 15px;
  position: relative;
}
.firstspan{
  font-size:20px;
}
.twospan{
  height: 32px;
  line-height: 32px;
  color: #25b7aa;
  position: absolute;
  top: 0px;
  right: 10px;
}
.twospan{
  cursor: pointer;
}
.newscontent,.contentul{
  width:100%;
  margin:auto;
}
.contentul{
  list-style-type:none;
}

.news-top{
  width:100%;
  background-color:#fbfcfd;
  /* -webkit-box-shadow: 5px 5px 5px #ccc;
  -moz-box-shadow: 5px 5px 5px #ccc;
  box-shadow: 5px 5px 5px #ccc; */
  margin:auto;

}   
.item-top{
  /* margin-bottom: 20px; */
}
.pic {
  position: relative;
  width: 100%;
  padding: 5px;
}
.left{
   position: relative; 
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}
.left img{
  position:  absolute; 
  top: 0;
  left: 0; 
  width: 100%;
  height: 100%;
}
.name{
  position: absolute;
  width:72%;
  left:26%;
  top:3%;
  /* transform: translate(0,-50%);   */
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 30px;
  font-family: PingFangSC;
  font-weight: 700;
   overflow: hidden;
  text-overflow: ellipsis;
   display: -webkit-box; 
  -webkit-line-clamp: 2;
  height: 60px;
  -webkit-box-orient: vertical; 
}
.name:hover{
  color:#25b7aa;
  cursor:pointer;
}
.brief{
  position: absolute;
  width:72%;
  left:26%;
  bottom:5%;
  font-size: 16px;
  line-height: 32px;
  color: #1b2b4f;
  opacity: .8;
  font-family: PingFangSC;
  
   overflow: hidden;
  text-overflow: ellipsis;
   display: -webkit-box; 
  -webkit-line-clamp: 2;
  height: 64px;
  -webkit-box-orient: vertical; 
}
.shortnew{
  background-color:#fbfcfd;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  height: 34px;
  line-height:34px;
  color: #1b2b4f;
}
.shortnew:hover{
  color:#25b7aa;
  cursor: pointer;
}
.comIntro{
  width:40%;
  height:400px;
  margin-left:5%;
}
.IntroTop{
  width:100%;
  height: 32px;
  color: #25b7aa;
  line-height: 32px;
  border-bottom: solid 1px #e4e4e4;
  margin-bottom: 15px;
  padding-left: 15px;
  position: relative;
}
.Introfirstspan{
  font-size:20px;
}
.Introtwospan{
  height: 32px;
  line-height: 32px;
  color: #25b7aa;
  position: absolute;
  top: 0px;
  right: 10px;
}
.Introtwospan{
  cursor: pointer;
}
.introcontent{
  width:100%;
  margin:auto;
  /* background-color:#fbfcfd; */
}
.introcontent p{
  line-height:34px; 
  color: #1b2b4f;
  text-indent: 2em;
  text-align:justify;
  text-justify:inter-ideograph
}
.contentright{  
  width:100%;
  min-height:300px;
  margin-top:20px;
  /* background:url(../assets/albg.png) no-repeat center center; 
  background:url(../assets/albg.png); */

} 
</style>
