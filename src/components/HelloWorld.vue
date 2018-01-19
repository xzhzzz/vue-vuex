<template>
  <div class="hello">
    <div class="content">
      <div class="box">{{this.number}}</div>
    </div>
    <el-button @click="test">click</el-button>
    <el-button @click="click">点击测试{{num}}</el-button>
    <el-button @click="click2" type="primary">点击测试</el-button>
    <input type="file" ref="upload" @change="loadImageFile($event)">
    <div>
      <progress ref="progress" value="0"></progress>
      {{this.percentage}}%
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import axios from 'axios';
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        number: 1,
        percentage:0
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
      loadImageFile(){
        let oFReader = new FileReader();
        let rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
        if (this.$refs.upload.files.length === 0) {
          return;
        }
        this.file =  this.$refs.upload.files[0];
        let oFile = this.$refs.upload.files[0];
//        if (!rFilter.test(oFile.type)) {
//          this.$message({
//            message: '图片格式不正确！',
//            type: 'warning'
//          });
//          return;
//        }
        oFReader.readAsDataURL(oFile);
        this.$refs.progress.max = oFile.size;
        oFReader.onprogress = (oFREvent)=>{
          this.$refs.progress.value = oFREvent.loaded;
          let percentage = Math.floor((oFREvent.loaded/oFREvent.total)*100);
          this.percentage = percentage;
          console.log(oFREvent.loaded);
        }
        oFReader.onload = (oFREvent)=>{
          console.log(oFREvent);
        };
      },
      test(){

      },
      click(){
        let params = {
          id:2
        };
        axios.get('/api/login',{params:params}).then(res=>{
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
    width: 5rem;
    height: 5rem;
    border: 1px solid #000000;
    margin: 0 auto 0.2rem;
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
