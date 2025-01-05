import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Slot from "./model/slot";

dotenv.config();

const slotsData = [
    {
        day: 'Monday',
        slots: [
            { start: 9, end: 13 },
            { start: 15, end: 17 },
        ],
    },
    {
        day: 'Tuesday',
        slots: [
            { start: 9, end: 13 },
            { start: 15, end: 17 },
        ],
    },
    {
        day: 'Wednesday',
        slots: [
            { start: 9, end: 13 },
            { start: 15, end: 17 },
        ],
    },
    {
        day: 'Thursday',
        slots: [
            { start: 9, end: 13 },
            { start: 15, end: 17 },
        ],
    },
    {
        day: 'Friday',
        slots: [
            { start: 9, end: 13 },
            { start: 15, end: 17 },
        ],
    },
    {
        day: 'Saturday',
        slots: [{ start: 9, end: 13 }],
    },
    {
        day: 'Sunday',
        slots: [{ start: 15, end: 17 }],
    },
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URI as string);

        await Slot.deleteMany({});

        await Slot.insertMany(slotsData);

        console.log('Database seeded successfully');
        await mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
        await mongoose.connection.close();
    }
};

seedDatabase();
