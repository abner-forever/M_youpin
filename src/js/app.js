import tab_render from './controllers/tab_controller'

import Router from './router'

//加载选项切换
tab_render.render();


//启动路由
const router = new Router({
    initial: "#/home"
});

window.router = router;

router.init();


console.log("app.js");