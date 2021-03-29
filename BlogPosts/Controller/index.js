//to require and declare things
const express = require("express");
const path = require("path");
const port = 8000;
const app = express();
const Blog = require("../Models/blog");
const db = require("../Config/mongoose");

//Middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../Views"));
// app.set("assets", path.join(__dirname, "../Views"));
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("Assets"));
app.use(express.static(path.join(__dirname, "../Assets")));

//Controllers

//index or home controller
app.get("/", function (req, res) {
  Blog.find({}, function (err, blogs) {
    if (err) {
      console.log("Error in fetching contacts from db");
      return;
    }

    return res.render("BlogIndex", {
      title: "Blogs",
      blog: blogs,
    });
  });
});

//Individual blog
app.get("/single-blog", function (req, res) {
  //get id from query in parameters
  let id = req.query.id;

  Blog.findById(id, function (err, singleblog) {
    if (err) {
      console.log("error in Fetching the blog");
      return;
    }
    return res.render("single-blog", {
      singleblog: singleblog,
    });
  });
});

//blogDetails controller
app.get("/BlogDetails", function (req, res) {
  Blog.find({}, function (err, blogs) {
    if (err) {
      console.log("Error in fetching contacts from db");
      return;
    }
    return res.render("BlogDetails", {
      title: "Blog Description",
      blog: blogs,
    });
  });
});

//new blog controller
app.get("/NewBlog", function (req, res) {
  return res.render("NewBlog", { title: "New Blog" });
});

//newblog post request controller
app.post("/newblog", function (req, res) {
  console.log(req.body);
  Blog.create(
    // req.body,
    {
      // blog=req.body,
      title: req.body.Blogtitle,
      category: req.body.Blogcategory,
      content: req.body.Blogcontent,
    },
    function (err, newBlog) {
      if (err) {
        console.log("Error in creating a blog post            ", err);
        return;
      }
      console.log("*******", newBlog);
      return res.redirect("/");
    }
  );
});

//delete  blog controller
app.get("/delete-blog", function (req, res) {
  //get id from query in parameters
  let id = req.query.id;

  Blog.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("error in deleting an object from db");
      return;
    }
    // redirect to sth
    return res.redirect("/");
  });
});

//Server start and error
app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server is up and runing on PORT: 127.0.0.1:", port);
});
