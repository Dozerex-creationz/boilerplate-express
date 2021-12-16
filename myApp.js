require("dotenv").config()
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var middle=bodyParser.urlencoded({extended: false});
app.use("/",middle)
app.post("/name",function(req,res){
    var fname=req.body.first+" "+req.body.last;
    res.send({name:fname});
})

// app.get("/:word/echo",function(req,res){
//     res.send({echo: req.params.word});
// }) 
// const msg={
//     "message":"Hello json"
// }
// const msgc={
//     "message":"HELLO JSON"
// }
// app.use(function(req,res,next){
//     var str=req.method+" "+req.path+" - "+req.ip;
//     console.log(str);
//     next();
// })
// app.get("/now",function(req,res,next){
//     req.time=new Date().toString();
//     next();
// },function(req,res){
//     res.send({time:req.time});
// })
// app.use("/public",express.static(__dirname+"/public"));
// var pathName=__dirname+"/views//index.html";
// console.log("Hello World");
// app.get('/', function(req,res){
//     res.sendFile(pathName);
// });

// app.get('/json', function(req,res){
//     if(process.env.MESSAGE_STYLE=="uppercase"){
//         res.json(msgc);        
//     }
//     else{    
//         res.json(msg);
//     }
// });


































 module.exports = app;
