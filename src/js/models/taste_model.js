//获取品味商品信息
const taste_list = () => {
    return $.ajax({
        url: '/api/shop/tastedata',
        dataType: 'json',
        success: function (res) {
            return res
        }
    })

}
export default {
    taste_list
}