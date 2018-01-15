<template>
  <div class="hello">
    <el-button @click="click">点击测试{{num}}</el-button>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import axios from 'axios';
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed:{
      ...mapState({
        num(state){
          return state.global.num;
        }
      })
    },
    methods:{
      click(){
        axios.get('/login').then(res=>{
          console.log(res);
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
