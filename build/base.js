const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        library: 'iview-typeahead-input',
        libraryTarget: "umd",
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'typeahead-input.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    'js': 'babel-loader',
                    'css': 'vue-style-loader!css-loader',
                    'scss': 'vue-style-loader!css-loader!sass-loader'
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=1024'
        }]
    },
    resolve: {
        alias: {
            /**
             * because vue-typeahead is use vue.common.js package
             * more see this link:
             * https://github.com/vuejs/vue/blob/f7170324a15dad84c31b86dddc1b5d3dd31b0cdd/dist/README.md
             */
            'vue$': 'vue/dist/vue.common.js'
        },
        extensions: ['.vue','.js']
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}