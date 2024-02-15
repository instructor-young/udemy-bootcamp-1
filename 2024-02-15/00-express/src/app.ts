import axios from "axios";
import bodyParser from "body-parser";
import express from "express";
import fs from "fs/promises";
import { v4 as uuid } from "uuid";
import posts from "./data/posts.json";

const app = express();
const port = 5555;
const jsonParser = bodyParser.json();

type Post = {
  id: number | string;
  userId: number;
  title: string;
  body: string;
};

app.use(jsonParser);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts", async (req, res) => {
  res.json(posts);
});

app.get("/posts/:postId", (req, res) => {
  const postId = req.params.postId;
  const post = posts.find((post) => post.id === Number(postId));

  res.send(post);
});

app.post("/posts", async (req, res) => {
  const { title, body } = req.body;
  const posts = await fs
    .readFile("./src/data/posts.json", {
      encoding: "utf-8",
    })
    .then((text) => JSON.parse(text));

  const newPost = {
    id: uuid(),
    userId: 1,
    title,
    body,
  };
  posts.push(newPost);
  const stringifiedNewPosts = JSON.stringify(posts);
  const result = await fs.writeFile(
    "./src/data/posts.json",
    stringifiedNewPosts,
    { encoding: "utf-8" }
  );

  console.log("result", result);

  res.send();
});

app.delete("/posts/:postId", async (req, res) => {
  let postId: string | number = req.params.postId;
  postId = isNaN(Number(postId)) ? postId : Number(postId);

  const posts = await fs
    .readFile("./src/data/posts.json", { encoding: "utf-8" })
    .then((text) => JSON.parse(text) as Post[]);
  const newPosts = posts.filter((post) => post.id !== postId);
  const stringifiedNewPosts = JSON.stringify(newPosts);

  await fs.writeFile("./src/data/posts.json", stringifiedNewPosts, {
    encoding: "utf8",
  });

  res.json(postId);
});

app.put("/posts/:postId", async (req, res) => {
  let postId: string | number = req.params.postId;
  postId = isNaN(Number(postId)) ? postId : Number(postId);
  const { title, body } = req.body;

  const posts = await fs
    .readFile("./src/data/posts.json", { encoding: "utf-8" })
    .then((text) => JSON.parse(text) as Post[]);
  posts.forEach((post) => {
    if (post.id === postId) {
      post.title = title;
      post.body = body;
    }
  });
  const stringifiedNewPosts = JSON.stringify(posts);

  await fs.writeFile("./src/data/posts.json", stringifiedNewPosts, {
    encoding: "utf8",
  });

  res.send(postId);
});

app.get("/todos", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const data = response.data;

  res.json(data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
