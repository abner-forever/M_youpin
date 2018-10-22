//获取分类信息
const goods_data = () => {
    return $.ajax({
        url: '/api/shop/classdata',
        dataType: 'json',
        success: (res) => {
            return res;
        }
    })
}
export default {
    goods_data
}