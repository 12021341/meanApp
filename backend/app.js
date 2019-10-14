const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const Post = require('./models/post');
// mongodb+srv://markjohn:<password>@cluster0-xdkyl.mongodb.net/test?retryWrites=true&w=majority
// ZCqR0y8WALEDJL20
mongoose.connect("mongodb+srv://markjohn:cbct27rP@cluster0-xdkyl.mongodb.net/markapp?retryWrites=true&w=majority?", 
{ useNewUrlParser: true,  useUnifiedTopology: true})
.then(() => {
    console.log("Connected to database");
}).catch(() => {
    console.log("Failed to connect to database");
});

app.use(bodyParser.json());

// CORS issue solution 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Access-Method", "GET, POST, PATCH, DELETE, OPTIONS")
 next();
});

// Post end point
app.post("api/post", (req, res, next) => {
    // Post object
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    console.log(post);
    post.save();
    res.status(201).json({
        message: 'Post successfully added!'
    }); // 201 new resource is created

});

app.get("api/posts", (req, res, next) => {
    Post.find().then(documents => {
        res.status(200).json({
            message: "Post fetch successfully!",
            posts: documents.map()
        });
    });
});

// Delete request
app.delete("api/posts/:id", (req, res, next) => {
    Post.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
    })
     req.status(200).json({
         message: "Post deleted!",
        posts: documents
        })
});

// app.use("/api/posts", (req, res, next) => {
//     const posts = [
//         {
//             id: "1s2c2g321",
//             title: "Quick Brown Fox",
//             content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
//         },
//         {
//             id: "3s2c2g4321",
//             title: "Quick Brown Fox",
//             content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
//         }
//     ];
//     res.status(200).json({
//         message: "Posts fetch successfully!",
//         posts: posts
//     });
// })

module.exports = app;

