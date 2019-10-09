<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{$route.params.title }}</p>
    <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'a page'
    }
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log('进入a路由模板')
    next()
  },
  beforeRouteLeave:(to,from,next)=>{
   console.log('离开a路由模板')
   next()
  }
}
</script>


<style scoped>
h1{
   color:green;
}
</style>