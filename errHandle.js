const headers = require('./mainHeader')
function errHandle(res){
    res.writeHead(400,headers);
    res.write(JSON.stringify({
        "status": "false",
        "message": "欄位未填寫正確，或無此todo id",
    }));
    res.end();
}

module.exports = errHandle
