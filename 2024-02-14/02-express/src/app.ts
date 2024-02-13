import express from "express";

const app = express();
const port = 5555;

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
