import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { AppError } from "./AppError";

const errorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  if (err instanceof AppError) {
     res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error("Erro inesperado:", err);

   res.status(500).json({
    status: "error",
    message: "Erro interno no servidor",
  });
};

export { errorHandler };