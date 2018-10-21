// import findgoodbody from "../views/findgood--many--father.html";



const findgood = async () => {
    await findg()
}




const findg = () => {
    $.ajax({
        url : 'http://localhost:8080/static/mock/data.json',
        dataType : 'json',
        success : function(data){
            var find = data.result.request.data.rags[1].rags[0].goods_list;
            // return datas;
            //console.log(goods);
            $(".findgood--many--father").load('/js/views/findgood--many--father.html',() =>{
                var goodslist = template("findgood--many--father",{
                    find : find
                })
                $(".findgood--many--father").html(goodslist)
            })
            // var goodslist = template("#swipter--small-box",{
            //     find : find
            // })
            // .html( $(".swipter--small-box").html()+goodslist );
        }
    })
}



export default{
    findgood
}