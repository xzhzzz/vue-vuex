<template>
  <div class="hello">
    <div class="content">
      <div class="box">1231</div>
    </div>
    <!--<el-button @click="click">点击测试{{num}}</el-button>-->
    <!--<el-button @click="click2" type="primary">点击测试</el-button>-->
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
        axios.get('/api/login').then(res=>{
          console.log(res);
        })
      },
      click2(){
        axios.get('/api/user/test').then(res=>{
          console.log(res);
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .content{
    width: 10rem;
    height: 10rem;
    background-color: red;
    .box{
      width: 2rem;
      height: 2rem;
      background-color: yellow;
      font-size: 0.12rem;
    }
  }
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
