import { Request, Response } from "express";
import httpsstatus from "http-status-codes";

const notFound = (req: Request, res: Response) => {
  res.status(httpsstatus.NOT_FOUND).json({
    success: false,
    message: "Route Not Found",
  });
};

export default notFound;
