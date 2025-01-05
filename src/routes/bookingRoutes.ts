import express from "express";
import {bookingController} from "../controller/bookingController";

const router = express.Router();

router.post('/', bookingController);

export default router;