import express from "express";
import { bookroom, getBookedRooms, getCustomers, getCustomerBookings } from "../controllers/booking.contoller.js";

const router = express.Router();

router.post("/bookroom", bookroom);
router.get("/bookedrooms", getBookedRooms);
router.get("/customers", getCustomers);
router.get("/customerbookings/:id", getCustomerBookings);

export default router;