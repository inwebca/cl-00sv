import express, { Request, Response, Router } from "express";
import authMiddleware from "../../middleware/authMiddleware";
import { IUser } from "../../interfaces/User";

const router: Router = express.Router();

router.get("/profile", authMiddleware, (req: Request, res: Response) => {
    try {
        const user = (req as any).user as IUser;
        res.json({ message: "This is a protected route", user });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;