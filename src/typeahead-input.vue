<template>
    <div class="ivu-input-wrapper ivu-input-type typeahead-input ivu-select ivu-select-single">
        <i v-if="loading" class="ivu-icon ivu-icon-load-c ivu-input-icon ivu-input-icon-normal loading" type="load-c"></i>
        <input class="ivu-input" type="text"
           :placeholder="placeholder"
           v-model="query"
           @keydown.down="down"
           @keydown.up="up"
           @keydown.enter="hit"
           @keydown.esc="reset"
           @blur="hit"
           @input="update"/>
        <div class="ivu-select-dropdown" v-show="hasItems && shown">
            <ul class="ivu-select-dropdown-list">
                <li v-for="(item, $item) in items" class="ivu-select-item" :class="activeClass($item)" @mousedown="hit" @mousemove="setActive($item)">
                    <span v-text="item[itemTitleKey]"></span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .typeahead-input{
        .loading{
            animation: typeahead-input-loading 1s linear infinite;
        }
        @keyframes typeahead-input-loading {
            from { transform: rotate(0deg);}
            50%  { transform: rotate(180deg);}
            to   { transform: rotate(360deg);}
        }
    }
</style>
<script>
import VueTypeahead from 'vue-typeahead';
export default {
    extends: VueTypeahead,
    props: {
        placeholder: {
            type: String,
            default: '...'
        },
        src: {
            type: String,
            default: ''
        },
        limit: {
            type: Number,
            default: 10,
        },
        minChars: {
            type: Number,
            default: 2
        },
        autocomplete: {
            type: Boolean,
            default: true
        },
        paramName: {
            type: String,
            default: 'keywords'
        },
        itemTitleKey: {
            type: String,
            default: 'name'
        },
        selectedFirst: {
            type: Boolean,
            default: false
        },
        convent: {
            type: Function,
            default: function(data){ return data; }
        }
    },
    data(){
        return {
            selectFirst: this.selectedFirst,
            shown: false,
            queryParamName: this.paramName,
            selected: null,
            dirtied: false
        }
    },
    watch: {
        query(val, oldVal){
            if(val !== oldVal && val.length >= this.minChars && (!this.selected ? true : val !== this.selected[this.itemTitleKey])){
                this.shown = true;
            }
            if(val < this.minChars){
                this.dirtied = false;
            }
        },
        paramName(val){
            this.queryParamName = val;
        }
    },
    computed: {
        isDirty(){
            return this.dirtied;
        }
    },
    methods: {
        onHit (item) {
            if(item && this.autocomplete){
                this.query = item[this.itemTitleKey];
            }
            this.selected = item;
            this.dirtied = true;
            this.$emit('changed', item);
            this.shown = false;
        },
        prepareResponseData (data) {
            return this.convent(data);
        },
        activeClass(index){
            return {
                'ivu-select-item-selected': this.current === index
            }
        }
    }
}
</script>