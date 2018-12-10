#This is a function from Moonlight
#Quick Start
##install
    npm install mn_https
##Basic Usage

    const Https= require("mn_https");

    const https= new Https();

###get

param host - such as  qyapi.weixin.qq.com

param path   - such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......

param callback

example

    https.get(host,path,function(err,result){
          ......
    });


###post

param host - Such as  qyapi.weixin.qq.com

param uri - Such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......

param content

param callback

example

    var host = "qyapi.weixin.qq.com";
    var url = "/cgi-bin/user/create?access_token=" + access_token;
    var content=JSON.stringify(data);
    https.post (host,path,content,function(err,result){
        ......
    });

