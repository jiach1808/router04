<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '重定向'
    }
  }
}
</script>


<style scoped>
h1{
   color:red;
}
</style>
