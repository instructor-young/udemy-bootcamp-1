import { RequestHandler } from "express";
import client from "../../db/client.db";

const createPost: RequestHandler = async (req, res) => {
  try {
    const { title, content } = req.body;
    const result = await client.query(
      "INSERT INTO posts(title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );
    const post = result.rows[0];

    res.json(post);
  } catch (e) {
    console.log(123123123);
    throw e;
  }
};

const getPosts: RequestHandler = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM posts");
    const posts = result.rows;

    res.json(posts);
  } catch (e) {
    throw e;
  }
};

const getPost: RequestHandler<{ postId: string }> = async (req, res) => {
  try {
    const postId = req.params.postId;
    const result = await client.query("SELECT * FROM posts WHERE id = $1", [
      postId,
    ]);
    const post = result.rows[0];

    res.json(post);
  } catch (e) {
    throw e;
  }
};

const updatePost: RequestHandler<{ postId: string }> = async (req, res) => {
  try {
    const { title, content } = req.body;
    const postId = req.params.postId;
    const result = await client.query(
      "UPDATE posts SET title = $2, content = $3 WHERE id = $1",
      [postId, title, content]
    );
    const post = result.rows[0];

    res.json(post);
  } catch (e) {
    throw e;
  }
};

const deletePost: RequestHandler<{ postId: string }> = async (req, res) => {
  try {
    const postId = req.params.postId;
    const result = await client.query("DELETE FROM posts WHERE id = $1", [
      postId,
    ]);
    const post = result.rows[0];

    res.json(post);
  } catch (e) {
    throw e;
  }
};

const postsService = {
  getPosts,
  getPost,
  updatePost,
  deletePost,
  createPost,
};

export default postsService;
