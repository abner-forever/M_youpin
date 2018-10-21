//路由工具
import {routes} from './route'

class Router {
    constructor ({initial}){
        this.routes = routes;   //路由表
        this.initial  = initial || '#/job'; //默认路由
    }
    
    init(){
        this.initialHash();
        this.listenHashChange()
    }
    initialHash(){  //初始化hash值
        
        if(!location.hash){
            location.hash = this.initial
        }
    }
    switch(path){   //切换路由的方法,方便在js事件等场景调用,
        location.hash = path
    }
    refresh(){  //切换路由的方法 来 切换路由
        let hash = location.hash
        if(!this.routes[hash]){     //路由表里
            location.hsah = this.initial
            return false;
        }
        this.routes[hash].render()
        this.switchTab()
    }
    switchTab(){
        $('.tab-item').each(function(item){
            if($(this).attr('.path')===location.hash){
                $(this).addClass('active')
            }else{
                $(this).removeClass('active')
            }
        })
    }
    listenHashChange(){
        window.addEventListener('load',this.refresh.bind(this))
        //当hash值变化的时候此事件会执行
        window.addEventListener('hashchange',this.refresh.bind(this))
    }
}
export default Router;