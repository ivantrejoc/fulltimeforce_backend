import { Router } from "express";
import postRouter from "./postRouter.js";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";

const mainRouter = Router();
mainRouter.use("/posts", postRouter);
mainRouter.use("/users", userRouter);
mainRouter.use("/auth", authRouter);
export default mainRouter;

