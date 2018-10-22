
//import datas from './json';


const smallbox = async () => {
    await _smallbox()
}




const _smallbox = () => {
    $.ajax({
        url : 'http://localhost:8080/static/mock/data.json',
        dataType : 'json',
        success : function(data){
            var datas = data.result.request.data.rags[0].rags[1].items;
            // return datas;
            //console.log(goods);
            // var dataslist = template("#swipter--small-box",{
            //     datas : datas
            // })
            // $(".swipter--small-box").html( $(".swipter--small-box").html()+dataslist );

            $(".small__box-box").load('/js/views/small__box-box.html',() =>{
                var goodslist = template("small__box-box",{
                    datas : datas
                })
                $(".small__box-box").html(goodslist)
            })
        }
    })
}



export default{
    smallbox
}