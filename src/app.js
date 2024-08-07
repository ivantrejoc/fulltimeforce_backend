import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import mainRouter from "./routes/index.js";
import "./middlewares/passport/local-strategy.js"


const server = express();
dotenv.config();

server.use(cors({credentials: true, origin: "http://localhost:3000" || "https://fulltimeforce-frontend.vercel.app/"}));
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {  
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 3600000
    }
  })
);

server.use(passport.initialize());
server.use(passport.session("session"));

server.use("/api", mainRouter);
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("SERVER OK");
});

server.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || error;
  console.error(error);
  res.status(status).send(message);
});

export default server;
