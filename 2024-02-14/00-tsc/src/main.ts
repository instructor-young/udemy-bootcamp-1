import http from "http";

const server = http.createServer((req, res) => {
  let content = "";

  switch (req.url) {
    case "/":
      content = "Home";
      break;
    case "/movies":
      content = "Movie List";
      break;
    default:
      content = "404";
  }

  res.write(content);
  res.end();
});

server.listen(5555, "localhost", () => {
  console.log("서버가 켜졌어요... 5555포트에서...");
});
