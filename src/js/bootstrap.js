import Vue from 'vue';
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import messagesFa from './lang/validation/fa';


import './router';
Vue.use(VeeValidate, {
  locale: 'fa',
  dictionary: {
    fa: messagesFa,
  },
});

Vue.use(VueRouter)
Vue.use(Vuex);
window.Vue = Vue;
require('./store/index');



