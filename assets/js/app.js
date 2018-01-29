require('./bootstrap');

window.Vue = require('vue');

Vue.component('calculator', require('./components/Calculator.vue'));

const app = new Vue({
    el: '#app',
});
