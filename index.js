const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files (HTML, CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, '.')));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Avalon X website is running on port ${PORT}`);
    console.log(`🌐 Access your website at: http://localhost:${PORT}`);
});