<template>
<div>
  <text class="message">Now, let's use Vue.js to build your Weex app.</text>
  <text>{{text}}</text>
  <input type="text" placeholder="Input Text" class="input" :autofocus=true value="" @change="onchange" @input="oninput"/>
  <div class="btn" @click="btnClick"><text class="btn-text">点击11</text></div>
</div> 
</template>
<style scoped>
.btn{
  padding: 5px 10px;
  background-color: #ff0000;
  
}
.btn-text{
  color: #ffffff;
}
</style>
<script>
var modal = weex.requireModule('modal');
export default {
  data(){
    return {
      text:"111"
    }
  },
  methods:{
    btnClick( event ){
      modal.alert({
        message: 'This is a alert',
        duration: 0.3
    }, ()=> {
      this.text = "sss";
    })
      
    }
  }
}
</script>
