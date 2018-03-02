<template>
  <div class="list">
    <p>list</p>
    <router-link to="/list/page">跳转</router-link>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  .list{

  }
</style>
