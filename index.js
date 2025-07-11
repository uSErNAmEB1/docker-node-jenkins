const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    res.end("Hello from Jenkins + Docker + Node.js App!");
});
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
