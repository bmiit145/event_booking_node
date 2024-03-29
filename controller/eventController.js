
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

       // return  res.json({message : "hello"});

        try {
            const timeout = 15000;

            // Wrap the entire function logic in a Promise and use setTimeout to implement the timeout
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => {
                    reject(new Error('Function execution timed out'));
                }, timeout);
            });

            const eventsPromise = Event.find();

            // Use Promise.race to wait for either the eventsPromise or timeoutPromise to resolve
            const events = await Promise.race([eventsPromise, timeoutPromise]);

            // replace _id with id
            events.forEach((event) => {
                event.id = event._id;
            });

            return res.json(events);
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
    },

    getUpcommingEvent: async (req, res) => {
        try{
            // get all upcomming events by loopup in database
            const upcommingEvents = await Event.find({
                start: { $gte: new Date()}
            }).sort('start');
            return res.json(upcommingEvents);
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
    },

    addNewEvent: async (req, res) => {
        try {
            const newEvent = new Event(req.body);
            await newEvent.save();
            res.status(200).json({newEvent ,  message: 'Event added successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    updateEvent: async (req, res) => {
        try {
            const { id, ...update } = req.body;
            const updatedEvent = await Event.findOneAndUpdate({ _id: id }, update,  { new: true });
           return  res.status(200).json({updatedEvent , message: 'Event updated successfully' });
        } catch (error) {
            console.error(error);
           return  res.status(500).send('Internal Server Error');
        }
    },

    // delete event where data is passed by heder
    deleteEvent: async (req, res) => {
        try {
            const id = req.header('event') || req.body.id;
            await Event.deleteOne({ _id: id });
            return res.status(204).json({ message: 'Event deleted successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
    },

}
