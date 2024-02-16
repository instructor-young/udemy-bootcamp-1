import bodyParser from "body-parser";
import express from "express";
import { controllers } from "./contexts";
import "./db/client.db";

const app = express();
const port = 5555;
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(controllers);

app.listen(port, () => {
  console.log(`서버 잘 돌아가는 중... [port:${port}]...`);
});
