<template>
  <div class="hello">
    <h1>404</h1>
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '路径有误！'
    }
  }
}
</script>


<style scoped>
h1{
   color:red;
}
</style>
