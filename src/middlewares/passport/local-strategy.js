import User from "../../models/User.js";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import crypto from "crypto";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "User not found" });
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
          return done(null, false, { message: "Password is incorrect" });
        }
        return done(null, user);
      } catch (error) {
        console.error;
        return done(error.message);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  const id = user._id.toString();
  done(null, id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return done(new Error("User not found"), null);
    }
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
