//to require and declare things
const express = require("express");
const path =require("path");
const port = 8000;
const app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../views'));
app.use(express.urlencoded({extended:true}));

//blogs
var blogs=[
    {
        Blogtitle:"he",
        Blogcategory:"heman",
        Blogcontent:"I am heman HAHAHAHH"
    }
];


//Controllers

//index or home controller
app.get('/',function(req,res){
    
    return res.render('BlogIndex',{ 
        title:"Blogs",
        blogs:blogs,
    });
});



//blogDetails controller
app.get('/BlogDetails',function(req,res){
    return res.render('BlogDetails',{ title:"Blog Description"});
});


//new blog controller
app.get('/NewBlog',function(req,res){
    return res.render('NewBlog',{ title:"New Blog"});
});

app.post('/newblog',function(req,res){
    
    blogs.push(req.body);
    return res.redirect('/');
});



//Server start and error
app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and runing on PORT: 127.0.0.1:",port);
});