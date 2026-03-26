const express = require('express');
const app = express();

app.get('/api/users', (req, res, next) => {
    try {
        // Simulating error
        throw new Error("Generic failure to fetch users");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error', message: err.message });
    }

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
