import { Router } from "express";
import postRouter from "./postRouter.js";

const mainRouter = Router();
mainRouter.use("/", postRouter);

export default mainRouter;

