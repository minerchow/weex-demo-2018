<template>
<div>
    <div class="btn" @click="increment()"><text class="btn-text">点击+1</text></div>
</div>
</template>
<style scoped>
.btn{
    background-color: #2e3e4c;
    height: 50px;
    line-height: 50px;
    width:300px;
    margin:20px auto;
    
}
.btn-text{
    color: #fff;
    text-align: center;
}
</style>
<script>
import { mapGetters, mapActions } from 'vuex'
var modal = weex.requireModule('modal');
export default {
    methods:{
        increment(){
            this.$store.dispatch('increment'); 
        }
       
    },
    
}
</script>