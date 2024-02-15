import express, { NextFunction, Request, Response } from "express";
import controllers from "./controllers";

const app = express();
const port = 5555;

app.get("/health-check", (_, res) => {
  res.json("OK");
});

app.use(controllers);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const response = {
    success: false,
    error: {
      message: err.message,
    },
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`서버가 무사히 돌아가는 중... 포트 넘버는 ${port}`);
});
