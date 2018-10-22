import taste_list_model from '../models/taste_model'

const picturetemplate = async () => {
    await pictures()
}

const pictures = async () => {

    let data = await taste_list_model.taste_list()
    var picture = data.result.request.data.rags[2].rags

    $(".repetition").load('/js/views/taste_discoverylist.html', () => {
        var goodslist = template("template", {
            picture: picture
        })
        $(".repetition").html(goodslist)
    })

}



export default {
    picturetemplate
}