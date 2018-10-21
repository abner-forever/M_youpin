import home_controller from '../controllers/home_controller'
import category_controller from '../controllers/category_controller'
import taste_controller from '../controllers/taste_controller'
import cart_controller from '../controllers/ucentr_controller'
import ucentr_controller from '../controllers/ucentr_controller'

const routes = {
    '#/home':home_controller,
    '#/category':category_controller,
    '#/taste':taste_controller,
    '#/cart':cart_controller,
    '#/ucentr':ucentr_controller,
}
export {routes}