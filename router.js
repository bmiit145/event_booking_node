const express = require('express');
const app = express();

// const MessageRouter = require("./routes/sendmessage");
const EventRouter =  require('./routes/event');


// app.use("/msg" , MessageRouter);
app.use("/event" , EventRouter);


module.exports = app;