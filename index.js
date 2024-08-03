
import dotenv from "dotenv";
import server from "./src/app.js";
import { dbConnection } from "./src/dbConnection.js";

dotenv.config();
const PORT = process.env.PORT || 3001

dbConnection();
server.listen(PORT, () => {
    console.log("Server raised at port: "+ PORT); 
  });