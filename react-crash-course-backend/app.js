const express = require('express');
const bodyParser = require('body-parser');

// const { getStoredPosts, storePosts} = require('./data/posts');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    // Attach CORS headers
    // Required when using a detached backend (that runs on a different domain)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/posts', async (req, res) => {

})

app.get('/posts/:id', (req, res) => {

})

app.post('/posts', (req, res) => {

})
app.get('/', (req, res) => {
    return res.json({"message": "Server Connected"})
})

app.listen(8080);