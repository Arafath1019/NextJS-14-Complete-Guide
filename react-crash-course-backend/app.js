const express = require("express");
const bodyParser = require("body-parser");

let allPosts = [];

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/posts", async (req, res) => {
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500)); // Only for investigating slow server purpose
    res.status(200).json({ message: 'Fetched all posts', posts: allPosts});
});

app.get("/posts/:id", (req, res) => {});

app.post("/posts", (req, res) => {
  const postData = req.body;
  const newPost = {
    ...postData,
    id: Math.random().toString(),
  };
  allPosts = [newPost, ...allPosts];
  console.log(allPosts)
  res.status(201).json({ message: "Stored new post", post: newPost });
});
app.get("/", (req, res) => {
  res.status(200).json({ message: "Home route" });
});

app.listen(8080);
