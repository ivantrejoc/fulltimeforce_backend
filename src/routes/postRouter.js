import { Router } from "express";
import { createPostBlogHandler, getAllBlogPostsHandler, getBlogPostByIdHandler, updateBlogPostHandler, deleteBlogPostHandler } from "../handlers/postBlogHandlers.js";

const postRouter = Router();

postRouter.get("/list", getAllBlogPostsHandler);
postRouter.get("/post/:id", getBlogPostByIdHandler);
postRouter.post("/create", createPostBlogHandler);
postRouter.put("/post/:id", updateBlogPostHandler);
postRouter.delete("/post/:id", deleteBlogPostHandler);

export default postRouter;

