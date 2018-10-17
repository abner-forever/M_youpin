import home_template from "../views/home.html";


const render = () => {

    document.querySelector("#app").innerHTML = home_template;

}


export default {
    render
}
