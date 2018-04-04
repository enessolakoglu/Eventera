



module.exports.commonResponseCreator = function (code, message, callback) {
    var response = new Object();

    response.code = code;
    response.message = message;

    callback(response);
};


module.exports.registerResponseCreator= function(code,message,secret,callback){
    var response = new Object();

    response.code = code;
    response.message = message;
    response.secret= secret;

    callback(response);
}