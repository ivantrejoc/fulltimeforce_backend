import User from "../../models/User.js";
import crypto from "crypto";


const singInUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    return { message: "User not found" };
  }

  const algorithm = "aes-256-cbc";
  const key = user.encryptionKey;
  const initVector = user.initializationVector;

  const decrypt = (encryptedPassword) => {
    const decipher = crypto.createDecipheriv(algorithm, key, initVector);
    let decrypted = decipher.update(encryptedPassword, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  };
  const decryptedPassword = decrypt(user.password);
  if (password !== decryptedPassword) {
    return { message: "Password is incorrect" };
  }

  userAuth("local", (err, user, info) => {
    if (err) {
      return { message: "Error al autenticar" };
    }
    if (!user) {
      return { message: info.message };
    }
    return { message: "User signed in successfully", user };
  })(email, password);
};

export default singInUser;
