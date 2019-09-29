const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Old way to send request
// app.use((req, res, next) => {
//     console.log('First middleware')
//     next();
// });

// app.use((req, res, next) => {
//     res.send('Hello express')
// });


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
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post successfully added!'
    }); // 201 new resource is created

});

app.use("/api/posts", (req, res, next) => {
    const posts = [
        {
            id: "1s2c2g321",
            title: "Quick Brown Fox",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            id: "3s2c2g4321",
            title: "Quick Brown Fox",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        }
    ];
    res.status(200).json({
        message: "Posts fetch successfully!",
        posts: posts
    });
})

module.exports = app;

