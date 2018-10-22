//实现路由工具

import { routes } from './route'


class Router{

    constructor ({ initial }) {
        
        this.routes = routes ;  //路由表

        this.initial = initial || '#/job' ;

    }

    init () {

        this.initialHash();
        this.listenHashChange();

    }

    initialHash (){

        if( !location.hash ){
            location.hash = this.initial
        }

    }


    refresh () {   //根据当前路径切换路由

        let hash = location.hash;
        if ( !this.routes[hash] ) { // 路由表里没有配置这个路由
            // 回到默认路由
            location.hash = this.initial;
            return false;
        }
        
        this.routes[hash].render();
        this.switchTab();

    }

    switchTab () {
        $(".tab-item").each(function(item){
            if ( $(this).attr("path") === location.hash ){
                $(this).find("div").addClass("active")
            }else{
                $(this).find("div").removeClass("active")
            }
        })
    }

    listenHashChange () {  //监听hash变化

        window.addEventListener('load', this.refresh.bind(this));

        window.addEventListener('hashchange', this.refresh.bind(this));

    }


}

export default{Router};


