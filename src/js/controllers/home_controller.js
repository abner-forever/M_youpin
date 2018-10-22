import render_data from './home_shoplist_controller'
import render_slideshow from './home_slideshow_container'

import home_template from '../views/home.html'

const render = () => {

    //渲染首页
    render_slideshow.render_slideshow()
    render_data.render_data()
    document.querySelector('#app').innerHTML = home_template
}

export default {
    render
}