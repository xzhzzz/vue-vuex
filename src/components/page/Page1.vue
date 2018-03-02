<template>
  <div class="page1">
    <button @click="add">随机</button>
    <p>{{num}}</p>
    <button @click="skip">home跳转</button>
    <router-link to="/list">返回</router-link>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        num:0
      }
    },
    activated(){
      console.log('activated');
    },
    methods: {
      add(){
        this.num = parseInt(Math.random()*100)+1;
      },
      skip(){
        this.$router.push('/');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page1{

  }
</style>
