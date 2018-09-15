const http = require('http');

const handler = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write('<!DOCTYPE "html">');
    res.write('<html>');
    res.write('<head> <title>Live Class</title> </head>');
    res.write('<body> <h1>Live Class Nodejs - SON</h1> </body>');
    res.write('</html>');
    res.end();
};

const server = http.createServer(handler);

server.on('request', () => {
    console.log('REQUEST ACCEPTED');
});

server.listen(3000);
