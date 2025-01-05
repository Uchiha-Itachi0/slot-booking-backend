import mongoose, { Document, Schema } from "mongoose";

interface Slot {
    start: number,
    end: number,
}

interface BookingDocument extends Document {
    date: string,
    slot: Slot,
}

const BookingSchema = new Schema<BookingDocument>({
    date: {type: String, required: true},
    slot: {
        start: {type: Number, required: true},
        end: {type: Number, required: true},
    },
});

export default mongoose.model<BookingDocument>("booking", BookingSchema);