import "reflect-metadata";
import express, { NextFunction, Response, Request } from "express";

import "./database";
import { routes } from "./routes";
import AppError from "./errors/AppError";

const app = express();
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal server Error",
    });
  }
);

app.listen(3000, () => console.log("Server is Running"));
