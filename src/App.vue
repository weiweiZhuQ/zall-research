<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* width:100%; */
  height:100%;
  margin:auto;
  
}
*{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
  list-style: none;
}
@media (min-width: 1024px){
#app{
    width:70%;
    border-left:1px solid #ccc;
    border-right:1px solid #ccc;
    }
} /*>=1024的设备*/

 @media (min-width: 992px){
#app{
    width:100%;
    }
}
@media screen and (min-width:768px){
#app{
    width:100%;
    }
}

@media screen and (min-width:480px){
#app{
    width:100%;
    }
}   
</style>
