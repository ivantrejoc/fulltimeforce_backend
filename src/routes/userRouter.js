import { Router } from "express";
import { createUserHandler } from "../handlers/userHandlers.js";

const userRouter = Router();

userRouter.post("/signup", createUserHandler);

export default userRouter;
