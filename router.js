const express = require('express');
const app = express();

// const MessageRouter = require("./routes/sendmessage");
const EventRouter =  require('./routes/event');
const AuthRouter = require('./routes/auth');


// app.use("/msg" , MessageRouter);
app.use("/event" , EventRouter);
app.use('/auth', AuthRouter);


module.exports = app;