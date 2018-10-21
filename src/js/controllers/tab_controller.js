import tab_template from "../views/tab.html";

import home_controller from "../controllers/home_controller";
import calss_controller from "../controllers/class_controller";

console.log("render");

const render = () => {

    document.querySelector(".tab").innerHTML = tab_template;
    $("#tan_main").addClass("active");

    switchTab(); 
}

const switchTab = () =>{
    $(".tab-item").on("tap",function(){
        let _controllers = [home_controller,calss_controller];
        _controllers[$(this).index()].render();

        $(this).addClass("active").siblings().removeClass("active")

    })


}

export default  {
    render
}