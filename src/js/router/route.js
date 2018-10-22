
// 路由表

import home_controller from '../controllers/home_controller';
import class_controller from '../controllers/class_controller';
import taste_controller from '../controllers/taste_controller';
import cart_controller from '../controllers/cart_controller';

import ucenter_controller from '../controllers/ucenter_controller';
import taste_controller from '../controllers/taste_controller';



const routes = {
    "#/home": home_controller,
    "#/class": class_controller,
    "#/taste":taste_controller,
    "#/ucenter":ucenter_controller,
    "#/cart": cart_controller,


}

export {
    routes
}
