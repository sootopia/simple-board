const Post = require('../models/Post');

exports.createPost = async (title, content, userId) => {
  const post = await Post.create({ title, content, user_id: userId });
  return post;
};

exports.getPostList = async () => {
  return await Post.findAll();
};

exports.getPostDetail = async (id) => {
  const post = await Post.findByPk(id);
  if (!post) throw new Error('Post not found');
  return post;
};

exports.updatePost = async (id, title, content, userId) => {
  const post = await Post.findByPk(id);
  if (!post || post.user_id !== userId) throw new Error('Unauthorized or not found');
  post.title = title;
  post.content = content;
  await post.save();
  return post;
};

exports.deletePost = async (id, userId) => {
  const post = await Post.findByPk(id);
  if (!post || post.user_id !== userId) throw new Error('Unauthorized or not found');
  await post.destroy();
};
