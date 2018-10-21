import taste_template from '../views/taste.html'


const render = () => {

    

    document.querySelector('#app').innerHTML = taste_template
    
}

export default{
    render
}