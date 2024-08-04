import { Router } from "express";
import {
  createPostBlogHandler,
  getAllBlogPostsHandler,
  getBlogPostByIdHandler,
  updateBlogPostHandler,
  deleteBlogPostHandler
} from "../handlers/postBlogHandlers.js";
import routeAuthorization from "../middlewares/routeAuthorization.js";

const postRouter = Router();

postRouter.get("/list", routeAuthorization, getAllBlogPostsHandler);
postRouter.get("/post/:id", routeAuthorization, getBlogPostByIdHandler);
postRouter.post("/create", routeAuthorization, createPostBlogHandler);
postRouter.put("/post/:id", routeAuthorization, updateBlogPostHandler);
postRouter.delete("/post/:id", routeAuthorization, deleteBlogPostHandler);

export default postRouter;
