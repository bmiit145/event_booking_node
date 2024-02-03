
const express = require('express');
const Event = require('../models/Event');

const eventData =
    {
        title: "Project Discussion with Team",
        start: new Date(2024, 1, 3, 20, 0), // Adjust month (0-indexed) as needed
        end: new Date(2024, 1, 4, 16, 0),   // Adjust month (0-indexed) as needed
        allDay: false,
        className: "bg-info-subtle",
        location: "Head Office, US",
        extendedProps: {
            department: "Discussion",
        },
        description: "Tell how to boost website traffic",
    };

const upcommingEventData = [
    {
        id: 123,
        title: "Upcommint Project",
        start: new Date(2024, 1, 6, 20, 0), // Adjust month (0-indexed) as needed
        end: new Date(2024, 1, 7, 16, 0),   // Adjust month (0-indexed) as needed
        allDay: false,
        className: "bg-info-subtle",
        location: "Head Office, US",
        extendedProps: {
            department: "Discussion",
        },
        description: "Tell how to boost website traffic",
    },
];

module.exports = {
    getAllEvent: async (req, res) => {
        try {
            const events = await Event.find();
            return res.json(events);
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
    },

    getUpcommingEvent: (req, res) => {
        res.json(upcommingEventData);
    },

    addNewEvent: async (req, res) => {
        try {
            const newEvent = new Event(eventData);
            await newEvent.save();
            res.status(201).json(newEvent);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}
