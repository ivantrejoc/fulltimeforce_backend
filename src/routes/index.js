import { Router } from "express";
import postRouter from "./postRouter.js";
import userRouter from "./userRouter.js";

const mainRouter = Router();
mainRouter.use("/posts", postRouter);
mainRouter.use("/users", userRouter);
export default mainRouter;

