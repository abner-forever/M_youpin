// import findgoodbody from "../views/findgood--many--father.html";
import taste_list_model from '../models/taste_model'

const findgood = async () => {
    await findg()
}

const findg = async () => {

    let data = await taste_list_model.taste_list()
    var find = data.result.request.data.rags[1].rags[0].goods_list;
    // return datas;
    //console.log(goods);
    $(".findgood--many--father").load('/js/views/taste_intro.html', () => {
        var goodslist = template("findgood--many--father", {
            find: find
        })
        $(".findgood--many--father").html(goodslist)
    })
}

export default {
    findgood
}