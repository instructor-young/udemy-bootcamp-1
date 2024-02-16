import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import controllers from "./contexts";
import "./prisma/client.prisma";

const app = express();
const port = 5050;
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(controllers);
app.use((_: Error, __: Request, res: Response, ___: NextFunction) => {
  res.json(400);
});

app.listen(port, () => {
  console.log(`Server listening at ${port}...`);
});
``;
