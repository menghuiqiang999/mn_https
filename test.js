/**
 * Created by Administrator on 2018/12/10.
 */
const pageName="test.js";

const Https= require('./Https');

const https= new Https();


https.get("baidu.com","",(err,result) =>{
    if(err){console.log(err)}
    console.log(result);
});