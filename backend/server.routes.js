const express = require("express");
const router = express.Router();
const contactController = require("./contactcontroller");

//contactController performs actions according to the routes
router.get("/contactlist", contactController.getContacts);
router.put("/sendOTP", contactController.sendMessage);
router.get("/sentmessageslist", contactController.getSentMessagesList);

module.exports = router;
