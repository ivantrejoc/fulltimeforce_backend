import createUser from "../controllers/userControllers/createUser.js";

export const createUserHandler = async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const user = await createUser(email, userName, password);
    if (user.message) {
      return res.status(400).json({ message: user.message });
    }
    const userData = { email: user.email, userName: user.username };

    res.status(201).json({ message: "User created successfully", userData });
  } catch (error) {
    console.error;
    res.status(500).json({ message: error.message });
  }
};

export const signInUserHandler = (req, res) => {
  res.status(200).json({ message: "User signed in successfully" });
};

export const signOutUserHandler = (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }
    res.status(200).json({ message: "User signed out successfully" });
  });
};
