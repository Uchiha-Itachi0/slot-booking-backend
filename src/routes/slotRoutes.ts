import express from "express";
import {getSlotBooking} from "../controller/slotController";

const router = express.Router();

router.get('/:date', getSlotBooking);

export default router