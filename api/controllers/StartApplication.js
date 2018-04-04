
var user=require('../mocks/models/User')
var jsonCreator= require('../helpers/JsonCreator')
var Constants=require('../helpers/Constants')

module.exports = {startApplication};



function startApplication(req, res, next) {
    var udid= req.headers['udid']
    var authorizationKeyOfUser= req.headers['authorization']
    
    if(authorizationKeyOfUser == "AUTHORIZATION"){
        jsonCreator.commonResponseCreator(Constants.UNREGISTER_CODE,Constants.UNREGISTER_MESSAGE,function(callback){
            res.status(callback.code)
            res.send(callback)
        });
    }
    else{

    user.find({udid: udid, _id:authorizationKeyOfUser}, function(err,mongoUser){
        if(err) {
            jsonCreator.commonResponseCreator(Constants.ERROR_CODE,Constants.ERROR_MESSAGE,function(callback){
                res.status(callback.code)
                res.send(callback)
            });
        }
        if(mongoUser.length == 0){
            jsonCreator.commonResponseCreator(Constants.UNREGISTER_CODE,Constants.UNREGISTER_MESSAGE,function(callback){
                res.status(callback.code)
                res.send(callback)
            });
        }else{
            jsonCreator.commonResponseCreator(Constants.OK_CODE,Constants.OK_MESSAGE,function(callback){
                res.status(callback.code)
                res.send(callback)
            });
        }
    })
}
}