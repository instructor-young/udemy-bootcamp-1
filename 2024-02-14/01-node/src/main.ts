import http from "http";

const host = "localhost";
const port = 5555;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello World");
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
