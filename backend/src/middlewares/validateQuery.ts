import { Request, Response, NextFunction } from "express";

export const validateSearchQuery = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const userQuery = req.query.q as string;

  if (!userQuery) {
    res.status(400).json({ message: "Query parameter 'q' is required" });
    return;
  }

  next();
};
