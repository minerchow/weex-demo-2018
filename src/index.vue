<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <HelloWorld/>
    <Display/>
    <Count/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Count from './components/count.vue';
import Display from './components/display.vue';
import store from './store/store';
export default {
  name: 'App',
  store,
  components: {
    HelloWorld,
    Count,
    Display
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
