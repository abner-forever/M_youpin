
const webpack_config = {
    mode : 'development',    //production
    entry: {
        app:'./src/js/app.js'
    },
    output : {
        filename : '[name].js'
    },
    module:{
        rules:[     //配置规则使用loader
            {
                test :/\.html$/,    //查找被当作模块引入到教室中后缀名是.html的文件
                use : 'string-loader'   //利用string-loader来处理
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/, // 代表不包括哪些
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}

module.exports = webpack_config;