import createBlogPost from "../controllers/blogPostControllers/createBlogPost.js";
import {
  getAllBlogPosts,
  getBlogPostById
} from "../controllers/blogPostControllers/getBlogPosts.js";
import updateBlogPost from "../controllers/blogPostControllers/updateBlogPost.js";
import deleteBlogPost from "../controllers/blogPostControllers/deleteBlogPost.js";

export const createPostBlogHandler = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = await createBlogPost(title, content, author);
    newPost
      ? res.status(201).json({ message: "Post created successfully" })
      : res.status(400).json({ message: "Failed to create post" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllBlogPostsHandler = async (req, res) => {
  try {
    const allPosts = await getAllBlogPosts();
    allPosts.length > 0
      ? res.status(200).json(allPosts)
      : res.status(404).json({ message: "No posts found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBlogPostByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await getBlogPostById(id);
    post
      ? res.status(200).json(post)
      : res.status(404).json({ message: "Post not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBlogPostHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;
    const updatePost = await updateBlogPost(id, title, content, author);
    if (updatePost) {
      res.status(200).json({ message: updatePost });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlogPostHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await deleteBlogPost(id);
    deletePost
      ? res.status(200).json({ message: deletePost })
      : res.status(404).json({ message: "Post not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
