import { Router } from "express";

const postRouter = Router();

postRouter.get("/list");
postRouter.get("/:id");
postRouter.post("/create");
postRouter.put("/:id");
postRouter.delete("/:id");

export default postRouter;

