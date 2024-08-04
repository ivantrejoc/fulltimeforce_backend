import createUser from "../controllers/userControllers/createUser.js";

export const createUserHandler = async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const user = await createUser(email, userName, password);
    user
      ? res.status(201).json({ message: "User created successfully", user })
      : res.status(400).json({ message: "Failed to create user" });
  } catch (error) {
    console.error;
    res.status(500).json({ message: error.message });
  }
};
