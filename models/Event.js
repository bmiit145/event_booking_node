// models/Event.js

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    allDay: { type: Boolean, default: false },
    className: { type: String },
    location: { type: String },
    extendedProps: { type: Object },
    description: { type: String },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;