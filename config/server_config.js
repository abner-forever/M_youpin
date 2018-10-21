const proxy = require('http-proxy-middleware')

const server_config = {
    host : 'localhost',
    port:'8080',
    livereload: true,
    middleware :[//https://app.youpin.mi.com/homepage/main/v1002?platform=m
        proxy('/youpin',{
            target : 'https://app.youpin.mi.com',
            changeOrigin:true,
            pathRewrite:{
                '^/youpin':''
            }
        }),
        proxy('/api',{
            target : 'http://localhost:3000',
            changeOrigin:true
        })
        // proxy('/api',{
        //     target:'http://localhost:3000',
        //     changeOrigin:true,
        // })
    ]

}

module.exports = server_config;