const express = require("express");
const path =require("path");
const port = 8000;
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../views'));

app.get('/',function(req,res){
    return res.render('BlogIndex');
});

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and runing on PORT: 127.0.0.1:",port);
});