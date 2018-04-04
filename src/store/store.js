import Vue from 'vue';
import Vuex from 'vuex';
import countModule from './countModule';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        countModule
    }
})