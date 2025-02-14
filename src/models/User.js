import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    encryptionKey: {
      type: Buffer,
      required: true
    },
    initializationVector: {
      type: Buffer,
      required: true
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
