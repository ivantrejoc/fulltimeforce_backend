import User from "../../models/User.js";
import crypto from "crypto";

const createUser = async (email, userName, password) => {
  try {
    const validateEmail = await User.findOne({ email: email }).exec();
    if (validateEmail) {
      throw new Error("Email already exists");
    }

    const validateUserName = await User.findOne({ username: userName }).exec();
    if (validateUserName) {
      throw new Error("Username already exists");
    }

    const algorithm = "aes-256-cbc";
    const key = crypto.randomBytes(32);
    const initVector = crypto.randomBytes(16);

    const encrypt = (text) => {
      const cipher = crypto.createCipheriv(algorithm, key, initVector);
      let encrypted = cipher.update(text, "utf8", "hex");
      encrypted += cipher.final("hex");
      return encrypted;
    };
    const passwordToEncrypt = password;
    const encryptedPassword = encrypt(passwordToEncrypt);

    const newUser = await new User({
      email,
      username: userName,
      password: encryptedPassword
    }).save();
    return newUser;
  } catch (error) {
    console.error;
    return error.message;
  }
};

export default createUser;
