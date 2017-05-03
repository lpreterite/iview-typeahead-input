# iview-typeahead-input
typeahead component for iview by [vue-typeahead](https://github.com/pespantelis/vue-typeahead)

## How to use
### setup
```
npm install lpreterite/iview-typeahead-input
```

### use
```
import Vue from 'vue';
import TypeaheadInput from 'iview-typeahead-input';
import 'iview/dist/styles/iview.css';
import axios from 'axios';

Vue.prototype.$http = axios;
Vue.component('TypeaheadInput', TypeaheadInput);

var vm = new Vue({
    el: '#app',
    data: function(){
        return {
            src: '//localhost:8080/typeahead',
            selection: {
                id: 0,
                name: ''
            }
        }
    },
    methods: {
        convent(data){
            return data;
        }
    }
})
```

### template
```
<div id="app">
    <typeahead-input
        ref="typeahead"
        :src="src"
        placeholder = 'something...'
        :limit = '20'
        :minChars = '2'
        :autocomplete = 'true'
        :paramName="keywords"
        :itemTitleKey="name"
        :selectedFirst="false"
        :convent="convent"
        @changed="selection = arguments[0]"
    ></typeahead-input>
</div>
```

### props

`src`: 数据源url

`limit`: 显示item最大数

`minChars`: 响应字符数，输入字符超出时才响应请求

`autocomplete`: 自动补全

`paramName`: 请求时的字段名称，默认`keywords`(?keywords=xxx)

`itemTitleKey`: item显示字段，默认`name`

`selectedFirst`: 自动选择第一个，默认`true`

`convent`: 请求后的数据处理方法，可选

### attr
`isEmpty`: 输入空是否为空

`isDirty`: 用于判断是否已选择

`hasItems`: 用于判断是否有数据返回

#### attr example
```
{
...
methods: {
    test(){
        console.log(this.refs.typeahead.isDirty);
    }
}
...
}
```

## Build
```
npm i 
npm run build
```

## Test
```
npm i
npm run mock
npm run dev
```