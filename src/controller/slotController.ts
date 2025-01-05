import {Request, Response, NextFunction} from "express";
import Slot from "../model/slot";
import Booking from "../model/booking";

export const getSlotBooking = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        const date: Date = new Date(req.params.date);
        const dayOfWeek: string = date.toLocaleDateString('en-US', {weekday: "long"});

        const slotData = await Slot.findOne({day: dayOfWeek});
        if(!slotData){
            res.status(404).json({message: "No slot found for this day"});
            return;
        }
        const bookings = await Booking.find({date: req.params.date});
        const bookedSlots = bookings.map(b => b.slot);

        const availableSlot = slotData.slots.flatMap(({start, end}) => {
            const slots = [];
            for(let i = start; i < end; i += .5){
                const slot = {start: i, end: i + .5}
                if(!bookedSlots.some(b => b.start === slot.start && b.end === slot.end)) slots.push(slot)
            }
            return slots
        });
        res.status(200).json(availableSlot);
        return;
    }
    catch (error: any){
        next(error);
    }
}