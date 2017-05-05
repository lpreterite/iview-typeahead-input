import Vue from 'vue';
import TypeaheadInput from '../src';
// import TypeaheadInput from '../dist/typeahead-input';
import 'iview/dist/styles/iview.css';
import axios from 'axios';

Vue.prototype.$http = axios;
Vue.component('TypeaheadInput', TypeaheadInput);
Vue.filter('toString', JSON.stringify);

var vm = new Vue({
    el: '#app',
    data: function(){
        return {
            title: 'TypeaheadInput',
            src: '//localhost:8080/typeahead',
            selection: {
                id: 0,
                name: ''
            },
            value: '',
            valueList: ['销售','市场','人事']
        }
    },
    methods: {
        random(){
            this.value = [].concat(this.valueList).sort(()=>Math.random() > 0.5 ? -1 : 1)[0]
        }
    }
})