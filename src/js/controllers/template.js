
const picturetemplate = async () => {
    await pictures()
}




const pictures = () => {
    $.ajax({
        url : 'http://localhost:8080/static/mock/data.json',
        dataType : 'json',
        success : function(data){
            var picture = data.result.request.data.rags[2].rags;
            // return datas;
            //console.log(goods);
            // var picturelist = template("#template",{
            //     picture : picture
            // })
            // $(".repetition").html( $(".swipter--small-box").html()+picturelist );

            $(".repetition").load('/js/views/template.html',() =>{
                var goodslist = template("template",{
                    picture : picture
                })
                $(".repetition").html(goodslist)
            })
        }
    })
}



export default{
    picturetemplate
}