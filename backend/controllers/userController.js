
const userService = require("../services/userService");

/**
 * Controller layer
 * Handles request and response only.
 */
exports.getUsers = (req, res) => {
  const users = userService.fetchUsers();
  res.json(users);
};
