import mongoose, { Document, Schema } from "mongoose";

interface Slot {
    start: number,
    end: number,
}

interface BookingDocument extends Document {
    date: string,
    slot: Slot,
    status: string,
}

const BookingSchema = new Schema<BookingDocument>({
    date: {type: String, required: true},
    slot: {
        start: {type: Number, required: true},
        end: {type: Number, required: true},
    },
    status: {type: String, default: "booked"}
});

export default mongoose.model<BookingDocument>("booking", BookingSchema);