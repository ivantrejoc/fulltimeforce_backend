const routeAuthorization = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "User not signed up" });
};

export default routeAuthorization;
