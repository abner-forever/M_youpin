import ucenter_template from "../views/ucenter.html";

const render = () => {
    document.querySelector("#app").innerHTML = ucenter_template;

}
export default {
    render
}