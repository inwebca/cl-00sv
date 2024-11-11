import { Request, Response, NextFunction } from "express";
import { CustomError } from "../types/CustomError";

function errorHandler(
    err: CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(err);

    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ error: message });
}

export default errorHandler;
