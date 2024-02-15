import axios from "axios";
import bodyParser from "body-parser";
import express from "express";
import posts from "./data/posts.json";

const app = express();
const port = 5555;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts", async (req, res) => {
  res.json(posts);
});

app.get("/posts/:postId", (req, res) => {
  const postId = req.params.postId;
  const post = posts.find((post) => post.id === Number(postId));

  res.json(post);
});

app.post("/posts", (req, res) => {
  console.log(req.body);
  res.send();
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
