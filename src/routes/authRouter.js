import { Router } from "express";
import passport from "passport";
import {
  signInUserHandler,
  signOutUserHandler
} from "../handlers/userHandlers.js";

const authRouter = Router();

authRouter.post("/signin", passport.authenticate("local"), signInUserHandler);

authRouter.get("/status", (req, resp) => { 
  return req.user ? resp.send(req.user) : resp.sendStatus(401);
});

authRouter.post("/signout", signOutUserHandler);
export default authRouter;
