
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

module.exports = {
    getAllEvent: (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Referrer-Policy', 'no-referrer'); // or 'same-origin', 'origin', etc.
        res.json(eventData);
    },

    getUpcommingEvent: (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Referrer-Policy', 'no-referrer'); // or 'same-origin', 'origin', etc.
        res.json(eventData);
    }
}
