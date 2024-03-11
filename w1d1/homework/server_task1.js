const http = require('http');

const server = http.createServer((req, res) => {
  // Set the content type of the response
  res.setHeader('Content-Type', 'text/plain');

  // Check the URL of the request and respond accordingly
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Welcome to the home page!');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('This is the about page.');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('Contact us at contact@sample.com');
  } else {
    // If no match, respond with an error message
    res.statusCode = 404;
    res.end('Invalid Request!');
  }
});

// Listen on port 5000
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`The NodeJS server on port ${PORT} is now running...`);
});
