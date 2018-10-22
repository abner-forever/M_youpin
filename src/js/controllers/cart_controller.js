import cart_template from '../views/cart.html'


const render = () => {

    

    document.querySelector('#app').innerHTML = cart_template
    
}

export default{
    render
}