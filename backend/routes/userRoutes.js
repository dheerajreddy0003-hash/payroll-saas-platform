
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * User Routes
 * Only routing logic is defined here.
 */
router.get("/", userController.getUsers);

module.exports = router;
