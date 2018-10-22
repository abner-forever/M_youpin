
import tab_render from './controllers/tab_controller'

import home_render from './controllers/home_controller'

import Router from './router'


import taste_render from './controllers/taste_controller'
import ucenter_render from './controllers/ucenter_controller'

home_render.render()
tab_render.render();



taste_render.render()
ucenter_render.render()

//启动路由

const router = new Router ({ initial: "#/home" });

window.router = router;

router.init();

home_render.render();

console.log("hello app.js");


