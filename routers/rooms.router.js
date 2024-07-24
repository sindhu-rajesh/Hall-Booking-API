import express from "express";
import { createRoom, getRooms } from "../controllers/rooms.controller.js"

const router = express.Router();

router.get("/getrooms", getRooms);
router.post("/createroom", createRoom);

export default router