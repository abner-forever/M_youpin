import taste_list_model from '../models/taste_model'
//import datas from './json';

const smallbox = async () => {
    await _smallbox()
}
//
const _smallbox = async () => {

    let data = await taste_list_model.taste_list();
    var datas = data.result.request.data.rags[0].rags[1].items;
    $(".small__box-box").load('/js/views/taste_slideshow.html', () => {
        var goodslist = template("small__box-box", {
            datas: datas
        })
        $(".small__box-box").html(goodslist)
    })

}

export default {
    smallbox
}