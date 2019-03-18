<template>
  <div class="firstpage">
    <header>
        <div class="navlist">
            <img class="logo" src="../assets/logo4.png">
        </div>
        <!--  -->
        <div class="navlist">
            <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
            text-color="#000"
            active-text-color="#25b7aa"
            >
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">关于我们</template>
                <el-menu-item index="2-1">研究院简介</el-menu-item>
                <el-menu-item index="2-2">组织结构</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">实验室</el-menu-item>
            <el-menu-item index="4">新闻媒体</el-menu-item>
            <!-- <el-submenu index="4" @click.native= "linkTo('fourth')">
                <template slot="title">新闻媒体</template>
                <el-menu-item index="4-1">新闻中心</el-menu-item>
            </el-submenu> -->
            <!-- @click.native= "linkTo('fifth')" -->
            <el-submenu index="5" >
                <template slot="title">加入我们</template>
                <el-menu-item index="5-1">菁英培养计划</el-menu-item>
                <el-menu-item index="5-2">热招岗位</el-menu-item>
            </el-submenu>
            </el-menu>
        </div>
    </header>
    <div class="content">
        <router-view/>
    </div>
    
    <footer>
    <div class="footerContent">
         <p>Copyright © 2019All Right Reserved | 卓尔智联研究院版权所有 </p>
     </div>
    <div class="footerContent">
        <p>联系邮箱：info@zallai.com | 地址：汉口北大道88号汉口电商大厦6层</p>
     </div>
    <div class="footerContent">
        <a href="http://www.miibeian.gov.cn" target="_blank"><i></i>鄂ICP备19006517号</a>
     </div>
    </footer>
  </div>
</template>

<script>
import { scrollAnimation } from './donhua.js';
export default {
  name: 'HelloWorld',
    data () {
        return {
        activeIndex:'1',
        msg: 'Welcome to Your Vue.js App',
        }
    },
    methods: {
        handleSelect(key, keyPath) { 
            console.log('key',key);
            console.log('key',keyPath);
           switch (key) {
            case '1':
                this.$router.push({ path: '/home' });
                break;
            case '2-1':{
                this.$router.push({ path: '/aboutus' });
                // window.scrollTo(0, 550)
                scrollAnimation(0,550);
                break;
            }   
            case '2-2':{
                 this.$router.push({ path: '/aboutus' });
                //  window.scrollTo(0, 1000)
                 scrollAnimation(0,1550);
                 break;
            }     
            case '3':
                this.$router.push({ path: '/lab' });
                break;
            case '4':
                this.$router.push({ path: '/news' });
                break;
            case '5-1':{
                this.$router.push({ path: '/joinus/plan',query:{activeIndex1:'one'}});
                this.$root.eventHub.$emit('toUpDate','one');
                break;
            }   
            case '5-2':{
                this.$root.eventHub.$emit('toUpDate','two');
                this.$router.push({ path: '/joinus/findpeople',query:{activeIndex1:'two'}});
                
                break;
            }     
            default:
                break;
            }
        },
        // linkTo(item){
        //     console.log('woshi');
        //     if(item=='sec'){
        //         this.$router.push({ path: '/aboutus' });
        //     }else if(item=='fifth'){
        //         this.$router.push({ path: '/joinus' });
        //     }
        // }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
firstpage{
    height:100%;
    overflow-y: scroll;
}
header{
    height:90px;
    width:100%;
    border-bottom: solid 1px #e6e6e6
}
.navlist{
    position:relative;
    height: 90px;
    display:inline-block;
}
.navlist:first-child{
    width:40%;  
}
.navlist:last-child{
    width:58%; 
}
.logo{
    position: absolute;
    width: 330px;
    height: 45px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); 
}
 .el-menu-demo{
    position:absolute;
    bottom:0px;
    right:5px;;
    height: 80px;
}
.el-submenu{
    height:80px;
}
.el-menu--horizontal>.el-menu-item{
    height:80px;
    line-height:80px;
    font-size:16px; 
}
.el-menu--horizontal>.el-menu-item:hover{
    color:#25b7aa !important;
    font-weight:bold;
    background:#fff !important; 
}
  .el-menu--horizontal>.el-submenu>>>.el-submenu__title{
    height:80px;
    line-height:80px;
    font-size:16px;
    /* border-left:1px transparent solid;
    border-image:linear-gradient(to bottom,#e6e6e6,#fff) 2 8; */
} 
 .el-menu--horizontal>.el-submenu>>>.el-submenu__title:hover{
    color:#25b7aa !important;
    font-weight:bold;
    background:#fff !important; 
} 
.content{
    /* min-height:1500px; */
}  
h1, h2 {
  font-weight: normal;
}
footer{
    width:100%;
    padding:10px 0;
    background-color:#25b7aa;
    color:#fff;
}
.footerContent{
    padding:10px;
}
.footerContent p{
    margin:auto;
    text-align:center;
}

</style>
