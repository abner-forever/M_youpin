import person_template from '../views/person.html'


const render = () => {

    

    document.querySelector('#app').innerHTML = person_template
    
}

export default{
    render
}