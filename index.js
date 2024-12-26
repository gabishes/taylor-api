import { createServer } from 'node:http';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    res.end('<h1>HELLO  WORLD</h1>');
});


server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});  

createServer( (req, res))