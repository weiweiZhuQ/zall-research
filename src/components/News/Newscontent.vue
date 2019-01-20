<template>
  <div class="hello">
    <div class="content">
      <!-- <ul class="contentul">
        <li v-for="(item,index) in newsData" :key="index" class="news-top">
          <div class="item-top">
            <div class="pic">
              <div class="left">
                <img :src="item.img" />
              </div>
              <div class="name" @click="linkToNew(index)">{{item.name}}</div>
              <p class="brief">{{item.brief}}</p>
            </div>
          </div>
        </li>
      </ul> -->
       <ul class="list">
        <li class="item" v-for="(item,index) in newsData" :key="index">
          <div class="left">
            <div><img :src="item.img"></div>
          </div>
          <div class="right relative">
            <div class="title">
              <div @click="linkToNew(index)">{{item.name}}</div>
            </div>
            <!-- <div class="date">
              <span>2019/01/02</span>
            </div> -->
            <div class="desc align-to-bottom">{{item.brief}}</div>
          </div>
          <div class="clear"></div>
        </li>
      </ul> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '热招岗位',
      newsData: [{ img: require('../../assets/bg15.jpg'), name: '蔡恒进教授受邀在第八届资产评估新发展国际论坛发表主题报告', brief: '2018年12月8日，卓尔智联研究院执行院长蔡恒进教授受邀参加在中南财经政法大学举办的第八届资产评估新发展国际论坛并发表主题报告《人工智能对产业和企业未来的冲击》。' },
      { img: require('../../assets/bg1.jpg'), name: '【简讯】卓尔智联研究院院长受邀主持第五届中国互联网金融发展战略研讨会“云计算助力金融数字化转型”专场', brief: '卓尔智联研究院院长蔡恒进教授受邀参加第五届中国互联网金融发展战略研讨会，并担任8日下午 “云计算助力金融数字化转型” 专场的主持人与点评人。' },
      { img: require('../../assets/bg3.jpg'), name: '首届Z-HACK算法创新大赛落幕！萌妹子战队斩获冠军~', brief: '近日，在刚刚落幕的首届Z-HACK算法创新大赛的决赛中，两位来自华中科技大学的萌妹子所组成的Hello World战队在主赛道中一举夺魁！' },
      { img: require('../../assets/bg2.jpg'), name: '腾讯云“云+创业”助力Z-HACK算法创新大赛', brief: '2018年11月8日，由卓尔智联研究院主办、腾讯云“云+创业”协办的首届Z-HACK算法创新大赛正式启动，为有志于深耕算法领域的明日之星们提供切磋技术和展示才华的舞台。' },
      { img: require('../../assets/bg9.jpg'), name: '卓尔智联研究院菁英人才培养计划介绍', brief: '中国近几十年大师十分稀缺，未来教育对大师有强大的需求。“山不在高，有仙则名。水不在深，有龙则灵。”决定大学和研究院质量的是大师级的教学资源，而非学院的建筑。' },
      { img: require('../../assets/bg11.jpg'), name: '卓尔智联研究院执行院长蔡恒进教授、常务副院长尚静女士受邀参加北京大学博古睿研究中心成立仪式', brief: '北京大学博古睿研究中心成立仪式在北京大学教育基金会成功举办，卓尔智联研究院执行院长蔡恒进教授、常务副院长尚静女士受邀参加成立仪式' },
      { img: require('../../assets/bg4.jpg'), name: '第一届Z-HACK算法创新大赛', brief: '卓尔智联一直致力于年轻科技人员的培养与发展，我们秉承着开放探索的态度，为全国年轻人搭建快速成长和展现自我的平台。心怀着人才大于一切的理念，卓尔智联正式启动第一届Z-HACK算法创新大赛，给那些科技新星一次被世界发现和关注的机会。' },]
    }
  },
  methods: {
    linkToNew(index) {
      switch (index) {
        case 0: { this.$router.push({ path: '/news6' }); break; }
        case 1: { this.$router.push({ path: '/news0' }); break; }
        case 2: { this.$router.push({ path: '/news1' }); break; }
        case 3: { this.$router.push({ path: '/news2' }); break; }
        case 4: { this.$router.push({ path: '/news3' }); break; }
        case 5: { this.$router.push({ path: '/news4' }); break; }
        case 6: { this.$router.push({ path: '/news5' }); break; }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content,
.contentul {
  width: 100%;
  margin: auto;
}

.contentul {
  list-style-type: none;
}

.news-top {
  width: 50%;
  background-color: #fbfcfd;
  /* margin: 10px;
  margin-bottom: 24px; */
  -webkit-box-shadow: 3px 3px 3px #ccc;
  -moz-box-shadow: 3px 3px 3px #ccc;
  box-shadow: 3px 3px 3px #ccc;
  margin: auto;
  /* padding:10px; */
}

.item-top {
  margin-bottom: 20px;
}

.pic {
  position: relative;
  width: 100%;
  padding: 5px;
}

.left {
  position: relative;
  width: 30%;
  height: 0;
  padding-bottom: 30%;
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
  width: 64%;
  left: 32%;
  top: 5%;
  /* transform: translate(0,-50%);   */
  font-size: 18px;
  margin-bottom: 8px;
  line-height: 32px;
  font-family: PingFangSC;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  /* display: -webkit-box; */
  -webkit-line-clamp: 2;
  height: 64px;
  -webkit-box-orient: vertical;
}

.name:hover {
  color: #25b7aa;
  cursor: pointer;
}

.brief {
  position: absolute;
  width: 64%;
  left: 32%;
  bottom: 5%;
  font-size: 16px;
  line-height: 32px;
  color: #1b2b4f;
  opacity: .8;
  font-family: PingFangSC;
  overflow: hidden;
  text-overflow: ellipsis;
  /* display: -webkit-box; */
  -webkit-line-clamp: 2;
  height: 64px;
  -webkit-box-orient: vertical;
}
.list{
    width: 800px;
    height: 100%;
    margin-bottom: 48px;
    margin: 10px auto; 
}
.list .item {
    margin-bottom: 16px;
    background-color: #fbfcfd;
    height: 240px;
}
.list .item .left{
    float: left;
    width: 320px;
    padding-right: 0;
}
.list .item .right{
    float: right;
    width: 480px;
    height: 100%;
    padding: 24px;
    position: relative;
    margin: 0 auto;
}
.list .item .right .title{
    font-size: 20px;
    margin-bottom: 8px;
    line-height: 32px;
    font-family: PingFangSC;
    font-weight: 700;
      overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.list .item .right .title:hover{
  color:#25b7aa;
  cursor: pointer;
}
.list .item .right .date{
    font-size: 12px;
    line-height: 16px;
    opacity: .8;
    font-family: Roboto;
    font-weight: 300;
}
.list .item .right .desc{
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
    position: absolute; 
    margin-right: 24px;
    bottom: 24px;
}
</style>
