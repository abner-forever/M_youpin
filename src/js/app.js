
import tab_render from './controllers/tab_controller'

import home_render from './controllers/home_controller'

import Router from './router'

home_render.render()
tab_render.render();

//启动路由

const router = new Router ({ initial: "#/home" });

window.router = router;

router.init();

home_render.render();

console.log("hello app.js");


