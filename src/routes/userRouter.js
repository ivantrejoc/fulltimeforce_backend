import { Router } from "express";
import { createUserHandler } from "../handlers/userHandlers.js";

const userRouter = Router();

userRouter.post("/signup", createUserHandler);
userRouter.get("/signin");

export default userRouter;
