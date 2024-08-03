import { Router } from "express";

const userRouter = Router();

userRouter.post("/register");
userRouter.get("/login");


export default userRouter;