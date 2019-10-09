<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="go">前进</button>
      <button @click="home">返回首页</button>
     
    </div>
    <div>
       <router-link to="/">重定向</router-link>

       <router-link to="/a/2019/wjc">A</router-link>
       <router-link to="/goHome">goHome</router-link>
       <router-link to="/c/666/mm">C</router-link>
       <router-link to="/wjc">WJC</router-link>

    </div>
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
  goBack(){
     this.$router.go(-1);
  },
  go(){
     this.$router.go(1);
   },
   home(){
     this.$router.push('/');
   }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity:1;
}
.fade-enter-active{
  transition:opacity 1s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity 1s;
}
</style>
