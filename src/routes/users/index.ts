import express from "express";
import User from "../../models/User";

const router = express.Router();

//GET /users/all - All users
router.get("/all", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;