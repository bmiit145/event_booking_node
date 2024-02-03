const express = require('express');
const router = express.Router();
// Set up multer to handle file uploads

// const upload = require('../multer')   // store in disk

// const multer = require('multer');
// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage: storage });


const EventController = require("../controller/eventController");

router.get("/events" , EventController.getAllEvent);
router.get("upcommingevents" , EventController.getUpcommingEvent);

module.exports = router;