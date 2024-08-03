import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.DATABASE_URI;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true }
};

export async function dbConnection() {
  try {
    await mongoose.connect(uri, clientOptions);
    if (mongoose.connection.readyState === 1) {
      const admin = mongoose.connection.db.admin();
      await admin.command({ ping: 1 });
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.log("Database connection error ", error);
    process.exit(1);
  }
}

dbConnection();
