import {Request, Response, NextFunction} from "express";
import Slot from "../model/slot";
import Booking from "../model/booking";

export const bookingController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {date, slot} = req.body;
        console.log(slot);

        const existingBooking = await Booking.findOne({date, 'slot.start': slot.start, 'slot.end': slot.end});
        if(existingBooking){
            res.status(400).json({message: "Slot already booked"});
            return;
        }

        const booking = new Booking({date, slot});
        await booking.save();

        res.status(201).json({success: true, message: "Successfully booked the slot"});
        return;
    }
    catch (error: any){
        next(error);
    }

}