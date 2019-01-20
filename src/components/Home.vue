<template>
  <div class="pages">
    <div class="swiper">
      <el-carousel :interval="3000" arrow="always" height="456px">
        <el-carousel-item v-for="(item,index) in sliderImg" :key="index">
          <div class="sliderImg" :style="{backgroundImage:'url(' + item.url + ')'}"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="section">
      <div class="news">
        <div class="news-info">
          <div class="news-title font-serif">新闻动态</div>
           <div class="vertical-bar"></div> 
          <div class="news-slider">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in newsData2" :key="index">
                  <div class="news-item" >
                    <!-- <div class="date"> 2018/11/21 </div> -->
                    <div class="ch-title font-serif">
                      <div @click="linkToNew(index)">{{item.name}}</div>
                    </div>
                    <div class="view-link">
                      <div @click="linkToNew(index)">VIEW</div>
                    </div>
                    <p class="albrief">{{item.brief}}</p>
                    <div class="news-img">
                      <div><img :src="item.img"></div>
                    </div>
                  </div>
                </div>
            
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="top">
            <div class="ch-title font-serif">打造B2B商脉</div>
            <div class="en-title font-serif">Discover the 1<sup>st</sup> Principle for B2B</div>
            <p class="albrief">卓尔智联研究院是卓尔控股旗下专门研究人工智能、区块链等前沿技术的科技机构。致力于挖掘区块链、物联网等技术领域的精英人才，为科技新星提供被世界发现和关注的机会。</p>
          </div>
        </div>
      </div>

    </div>

    <!-- <div class="content">
      <div class="homeNews">
        <div class="NewsTop">
          <span class="firstspan">新闻</span>
          <span class="twospan" @click="linkToNew3()">More</span>
        </div>
        <div class="newscontent">
          <ul class="contentul">
            <li v-for="(item,index) in newsData" :key="index" class="news-top">
              <div class="item-top">
                <div class="pic">
                  <div class="left">
                    <img :src="item.img" />
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
      <div class="text">打造B2B商脉</div>
      <div class="en-text">Discover the 1
        <sup>st</sup> Principle for B2B</div>
      <div class="sub-text">卓尔智联研究院是卓尔控股旗下专门研究人工智能、区块链等前沿技术的科技机构。致力于挖掘区块链、物联网等技术领域的精英人才，为科技新星提供被世界发现和关注的机会。</div>
    </div> -->

  </div>
</template>

<script>
import { scrollAnimation } from './donhua.js';
import swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'HelloWorld',
  data() {
    return {
      sliderImg: [{ url: require('../assets/lb3.png') },
      { url: require('../assets/planbg.png') },
      { url: require('../assets/lb2.png') }],
      newsData: [{ img: require('../assets/bg1.jpg'), name: '【简讯】卓尔智联研究院院长受邀主持第五届中国互联网金融发展战略研讨会“云计算助力金融数字化转型”专场', brief: ' 卓尔智联研究院院长蔡恒进教授受邀参加第五届中国互联网金融发展战略研讨会，并担任8日下午 “云计算助力金融数字化转型” 专场的主持人与点评人。' }
      ],
      newsData1: [{ text: '首届Z-HACK算法创新大赛落幕！萌妹子战队斩获冠军~' },
      { text: '腾讯云“云+创业”助力Z-HACK算法创新大赛' },
      { text: '卓尔智联研究院执行院长蔡恒进教授、常务副院长尚静女士受邀参加北京大学博古睿研究中心成立仪式', brief: '北京大学博古睿研究中心成立仪式在北京大学教育基金会成功举办，卓尔智联研究院执行院长蔡恒进教授、常务副院长尚静女士受邀参加成立仪式' },
      ],
      //  mySwiper,
      newsData2:[{img:require('../assets/bg15.jpg'),name:'蔡恒进教授受邀在第八届资产评估新发展国际论坛发表主题报告',brief:'2018年12月8日，卓尔智联研究院执行院长蔡恒进教授受邀参加在中南财经政法大学举办的第八届资产评估新发展国际论坛并发表主题报告《人工智能对产业和企业未来的冲击》。'},
         {img:require('../assets/bg1.jpg'),name:'【简讯】卓尔智联研究院院长受邀主持第五届中国互联网金融发展战略研讨会“云计算助力金融数字化转型”专场',brief:'卓尔智联研究院院长蔡恒进教授受邀参加第五届中国互联网金融发展战略研讨会，并担任8日下午 “云计算助力金融数字化转型” 专场的主持人与点评人。'},
      {img:require('../assets/bg3.jpg'),name:'首届Z-HACK算法创新大赛落幕！萌妹子战队斩获冠军~',brief:'近日，在刚刚落幕的首届Z-HACK算法创新大赛的决赛中，两位来自华中科技大学的萌妹子所组成的Hello World战队在主赛道中一举夺魁！'},
      {img:require('../assets/bg2.jpg'),name:'腾讯云“云+创业”助力Z-HACK算法创新大赛',brief:'2018年11月8日，由卓尔智联研究院主办、腾讯云“云+创业”协办的首届Z-HACK算法创新大赛正式启动，为有志于深耕算法领域的明日之星们提供切磋技术和展示才华的舞台。'},
      {img:require('../assets/bg9.jpg'),name:'卓尔智联研究院菁英人才培养计划介绍',brief:'中国近几十年大师十分稀缺，未来教育对大师有强大的需求。“山不在高，有仙则名。水不在深，有龙则灵。”决定大学和研究院质量的是大师级的教学资源，而非学院的建筑。'},
      {img:require('../assets/bg11.jpg'),name:'卓尔智联研究院执行院长蔡恒进教授、常务副院长尚静女士受邀参加北京大学博古睿研究中心成立仪式',brief:'北京大学博古睿研究中心成立仪式在北京大学教育基金会成功举办，卓尔智联研究院执行院长蔡恒进教授、常务副院长尚静女士受邀参加成立仪式'},
      {img:require('../assets/bg4.jpg'),name:'第一届Z-HACK算法创新大赛',brief:'卓尔智联一直致力于年轻科技人员的培养与发展，我们秉承着开放探索的态度，为全国年轻人搭建快速成长和展现自我的平台。心怀着人才大于一切的理念，卓尔智联正式启动第一届Z-HACK算法创新大赛，给那些科技新星一次被世界发现和关注的机会。'},]
    }
  },
  methods: {
    linkToNew(index){
      switch(index){
        case 0:{this.$router.push({ path: '/news6' });break;}
        case 1:{this.$router.push({ path: '/news0' });break;}
        case 2:{this.$router.push({ path: '/news1' });break;}
        case 3:{this.$router.push({ path: '/news2' });break;}
        case 4:{this.$router.push({ path: '/news3' });break;}
        case 5:{this.$router.push({ path: '/news4' });break;}
        case 6:{this.$router.push({ path: '/news5' });break;}
      }
    },
    linkToNew1(index) {
      if (index == '0') {
        this.$router.push({ path: '/news0' });
      }
    },
    linkToNew2(index) {
      switch (index) {
        case 0: {
          this.$router.push({ path: '/news1' });
          break;
        }
        case 1: { this.$router.push({ path: '/news3' }); break; }
        case 2: { this.$router.push({ path: '/news4' }); break; }
      }
    },
    linkToNew3() {
      this.$router.push({ path: '/newscontent' });
    },
    linkToNew4() {
      this.$router.push({ path: '/aboutus' });
    }
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      prevButton: '.swiper-button-prev',
      nextButton: '.swiper-button-next',
      width :420,
      setWrapperSize :true,
      loopedSlides: 7,

      centerInsufficientSlides: true,
      breakpoints: { 

      
      //当宽度小于等于980,手机的样式
      981: {
        width :420,
        spaceBetween: 50
      },
      //当宽度小于等于988,笔记本电脑的
      992: {
        
        // slidesPerView: 3,
        spaceBetween: 20
      },
  }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.pages {
   background: url(https://img.alicdn.com/tfs/TB1mDEIw8smBKNjSZFsXXaXSVXa-404-214.png) no-repeat right 495px; 
  /* background-color:rgba(255, 255, 255, 0.5) */
}

.sliderImg {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.content {
  width: 100%;
  min-height: 465px;
  background: url(../assets/albg.png) no-repeat center center;
  background-size: 100% 100%;
  padding-top: 20px;
  /* text-align:center;  */
  /* padding-left:10px; */
  display: flex;
}

.text {
  text-align: center;
  font-size: 32px;
  color: #1b2b4f;
  letter-spacing: 2px;
  line-height: 32px;
  margin-bottom: 21px;
  text-transform: uppercase;
  font-family: Verdana, Sans-serif;
}

.en-text {
  text-align: center;
  font-size: 22px;
  color: #1b2b4f;
  letter-spacing: 0;
  line-height: 22px;
  margin-bottom: 31px;
  font-family: Bulter;
  text-align: center;
  margin: auto;
}

.sub-text {
  text-align: center;
  opacity: .8;
  font-size: 18px;
  color: #2a333f;
  letter-spacing: 0;
  line-height: 32px;
  font-family: PingFangSC;
  padding: 10px 10%;
}

.homeNews {
  width: 50%;
  padding-left: 10px;
}

.NewsTop {
  width: 100%;
  height: 32px;
  color: #25b7aa;
  line-height: 32px;
  border-bottom: solid 1px #e4e4e4;
  margin-bottom: 15px;
  padding-left: 15px;
  position: relative;
}

.firstspan {
  font-size: 20px;
}

.twospan {
  height: 32px;
  line-height: 32px;
  color: #25b7aa;
  position: absolute;
  top: 0px;
  right: 10px;
}

.twospan {
  cursor: pointer;
}

.newscontent,
.contentul {
  width: 100%;
  margin: auto;
}

.contentul {
  list-style-type: none;
}

.news-top {
  width: 100%;
  background-color: #fbfcfd;
  /* -webkit-box-shadow: 5px 5px 5px #ccc;
  -moz-box-shadow: 5px 5px 5px #ccc;
  box-shadow: 5px 5px 5px #ccc; */
  margin: auto;
}

.item-top {
  /* margin-bottom: 20px; */
}

.pic {
  position: relative;
  width: 100%;
  padding: 5px;
}

.left {
  position: relative;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.left img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.name {
  position: absolute;
  width: 72%;
  left: 26%;
  top: 3%;
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

.name:hover {
  color: #25b7aa;
  cursor: pointer;
}

.brief {
  position: absolute;
  width: 72%;
  left: 26%;
  bottom: 5%;
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

.shortnew {
  background-color: #fbfcfd;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  height: 34px;
  line-height: 34px;
  color: #1b2b4f;
}

.shortnew:hover {
  color: #25b7aa;
  cursor: pointer;
}

.comIntro {
  width: 40%;
  height: 400px;
  margin-left: 5%;
}

.IntroTop {
  width: 100%;
  height: 32px;
  color: #25b7aa;
  line-height: 32px;
  border-bottom: solid 1px #e4e4e4;
  margin-bottom: 15px;
  padding-left: 15px;
  position: relative;
}

.Introfirstspan {
  font-size: 20px;
}

.Introtwospan {
  height: 32px;
  line-height: 32px;
  color: #25b7aa;
  position: absolute;
  top: 0px;
  right: 10px;
}

.Introtwospan {
  cursor: pointer;
}

.introcontent {
  width: 100%;
  margin: auto;
  /* background-color:#fbfcfd; */
}

.introcontent p {
  line-height: 34px;
  color: #1b2b4f;
  text-indent: 2em;
  text-align: justify;
  text-justify: inter-ideograph
}

.contentright {
  width: 100%;
  min-height: 300px;
  margin-top: 60px;
  /* background:url(../assets/albg.png) no-repeat center center; 
  background:url(../assets/albg.png); */
}

.news {
  width: 100%;
  /* min-width: 1000px; */
   background: url(http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=3d%E5%B1%B1%E6%B0%B4%E7%94%BB%E8%83%8C%E6%99%AF%E5%A2%99&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=undefined&latest=undefined&copyright=undefined&cs=1343971853,900400025&os=3711630769,3006480766&simid=0,0&pn=0&rn=1&di=80275831790&ln=1747&fr=&fmq=1547895023459_R&fm=rs2&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&oriquery=%E5%B1%B1%E6%B0%B4%E7%94%BB&objurl=http%3A%2F%2Fbpic.ooopic.com%2F17%2F66%2F66%2F17666673-353d0c347e4d2446cd2c69164c2aee11.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined) center 0 no-repeat; 
}

.news .row {
  width: 65%; 
  height: 100%;
  margin: 0 auto;
  position: relative;
}

.news .row .top {
  padding-top: 127px;
  padding-bottom: 60px;
  text-align: center;
}

.news .row .top .ch-title {
  font-size: 40px;
  color: #1b2b4f;
  letter-spacing: 2px;
  line-height: 40px;
  margin-bottom: 21px;
  text-transform: uppercase;
}

.news .row .top .en-title {
  font-size: 32px;
  color: #1b2b4f;
  letter-spacing: 0;
  line-height: 32px;
  margin-bottom: 31px;
}

.news .row .top .albrief {
  margin: 0 50px;
  opacity: .8;
  font-size: 14px;
  color: #2a333f;
  letter-spacing: 0;
  line-height: 32px;
  font-family: PingFangSC;
  text-align: center;
}

.news .news-info {
   /* background: url(http://pic159.nipic.com/file/20180320/26822836_051240981039_2.jpg) center bottom repeat-x;  */
     /* background: #f0f0f0; */
     background-color: #fbfcfd;

}
/* https://img.alicdn.com/tfs/TB1qUdcxnCWBKNjSZFtXXaC3FXa-1440-200.png */
.news .news-info .news-title {
  font-size: 25px;
  color: #1b2b4f;
  letter-spacing: 0;
  text-align: center;
  padding:40px 20px;
  margin: 0 auto;
  line-height: 24px;
}

.news .news-info .vertical-bar {
  height: 2px;
  width: 20px;
  margin: 5px auto 17px;
  opacity: .8;
  background-color: #1b2b4f;
  overflow: hidden;

  
}

.news .news-info .news-slider {
  /* max-width: 1920px;
  min-width: 1000px; */
  width:100%;
  height: 593px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  
}

 /* .news .news-info .news-slider .swiper-container {
  width: 100%;
  height: 100%;
}  */

.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

 /* .news .news-info .news-slider .swiper-slide:first-of-type {
  margin-left: 48px;
}  */
/* 手机980 */
  @media (max-width: 981px){ 
   .news .news-info .news-slider .swiper-slide:first-of-type {
    margin-left: 40px;
  }  
} 
/* 电脑988 */
/* @media screen and (max-width:992px){
  .news .news-info .news-slider .swiper-slide:first-of-type {
  margin-left: 0px;
 }   
} */
.news .news-info .news-slider .swiper-slide {
  width: 420px;
  height: 560px;
  text-align: center;
  font-size: 18px;
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(27, 43, 79, .05);
  margin: 0 12px;
}
.news .news-info .news-slider .swiper-slide .news-item {
    width: 420px;
    padding: 28px 20px 20px;
    height: 560px;
    position: relative;
}
.news .news-info .news-slider .swiper-slide .news-item .date {
    opacity: .8;
    font-family: Roboto;
    font-weight: 800;
    font-size: 12px;
    color: #1b2b4f;
    letter-spacing: 2px;
    text-align: center;
    line-height: 16px;
    padding-bottom: 12px;
}
.news .news-info .news-slider .swiper-slide .news-item .ch-title {
    font-size: 24px;
    color: #1b2b4f;
    text-align: center;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    height: 80px;
    -webkit-box-orient: vertical;
}
.news .news-info .news-slider .swiper-slide .news-item .view-link {
    position: absolute;
    text-align: center;
    top: 185px;
    left: 0;
    right: 0;
    margin: 0 auto;
    color:#25b7aa;
}
.news .news-info .news-slider .swiper-slide .news-item .ch-title:hover,.news .news-info .news-slider .swiper-slide .news-item .view-link:hover{
  cursor: pointer;
  color:#25b7aa;
}
.news .news-info .news-slider .swiper-slide .news-item .albrief {
    padding-right: 20px;
    opacity: .6;
    font-size: 14px;
    color: #1b2b4f;
    text-align: left;
    line-height: 28px;
    position: absolute;
    bottom: 260px;
    font-family: PingFangSC;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    height: 84px;
    -webkit-box-orient: vertical;
}
.news .news-info .news-slider .swiper-slide .news-item .news-img {
    width: 380px;
    height: 220px;
    position: absolute;
    bottom: 20px;
    overflow: hidden; 
}
.news .news-info .news-slider .swiper-slide .news-item .news-img img:hover {
    cursor: pointer;
    transform: scale(1.1);
    -ms-transform:scale(1.1);     /* IE 9 */
    -moz-transform:scale(1.1);     /* Firefox */
    -webkit-transform:scale(1.1); /* Safari 和 Chrome */
    -o-transform:scale(1.1);
   
}
.news .news-info .news-slider .swiper-slide .news-item .news-img img{
    width: 380px;
    height: 220px; 
    transition-duration: .5s;
}
</style>
