const postService = require('../services/postService');

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.userId; // JWT 미들웨어에서 넣어줄 예정
    const post = await postService.createPost(title, content, userId);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPostList = async (req, res) => {
  const posts = await postService.getPostList();
  res.status(200).json(posts);
};

exports.getPostDetail = async (req, res) => {
  try {
    const post = await postService.getPostDetail(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.userId;
    const post = await postService.updatePost(req.params.id, title, content, userId);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const userId = req.userId;
    await postService.deletePost(req.params.id, userId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
