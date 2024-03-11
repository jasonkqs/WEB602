const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Log that the server is running
    console.log('The NodeJS server on port 5000 is now running...');

    // Define the file path based on the requested URL
    let filePath;
    if (req.url === '/') {
        filePath = path.join(__dirname, 'home.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else if (req.url === '/contact') {
        filePath = path.join(__dirname, 'contact.html');
    } else {
        // If the URL does not match, respond with a "Not Found" message
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
    }

    // Read the HTML file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // If there is an error reading the file, respond with a "Server Error" message
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
            return;
        }

        // Set the response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // Write the HTML content to the response
        res.end(data);
    });
});

// Listen on port 5000
server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
