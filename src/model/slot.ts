import mongoose, {Document, Schema} from "mongoose"

interface Slot {
    start: number,
    end: number
}

interface SlotDocument extends Document {
    day: string,
    slot: Slot[]
}

const SlotSchema = new Schema<SlotDocument>({
    day: {type: String, required: true},
    slot: [
        {
            start: {type: Number, required: true},
            end: {type: Number, required: true},
        }
    ]
})

export default mongoose.model<SlotDocument>('Slot', SlotSchema);