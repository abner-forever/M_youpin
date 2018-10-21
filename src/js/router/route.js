
// 路由表

import home_controller from '../controllers/home_controller';
import class_controller from '../controllers/class_controller';
import taste_controller from '../controllers/taste_controller';
import cart_controller from '../controllers/cart_controller';
import person_controller from '../controllers/person_controller';



const routes = {

    "#/home": home_controller,
    "#/class": class_controller,
    "#/taste": taste_controller,
    "#/cart": cart_controller,
    "#/person": person_controller,


}

export {
    routes
}
