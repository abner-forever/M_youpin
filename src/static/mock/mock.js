const  classdata = require ("./classdata.json");
const  tastedata = require ("./tastedata.json");

module.exports = () => {
    return {
        classdata: classdata,
        tastedata: tastedata
    }
}