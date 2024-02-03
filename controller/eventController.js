
const eventData = [
    {
        id: 456,
        title: "Velzon Project Discussion with Team",
        start: new Date(2024, 1, 3, 20, 0), // Adjust month (0-indexed) as needed
        end: new Date(2024, 1, 4, 16, 0),   // Adjust month (0-indexed) as needed
        allDay: false,
        className: "bg-info-subtle",
        location: "Head Office, US",
        extendedProps: {
            department: "Discussion",
        },
        description: "Tell how to boost website traffic",
    },
];

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
    getAllEvent: (req, res) => {
        res.json(eventData);
    },

    getUpcommingEvent: (req, res) => {
        res.json(upcommingEventData);
    }
}
