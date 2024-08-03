import { Router } from "express";

const postRouter = Router();

postRouter.get("/posts");
postRouter.get("/posts/:id");
postRouter.post("/posts");
postRouter.put("/post:id");
postRouter.delete("/post:id");

export default postRouter;

