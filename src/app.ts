import express from "express"
import errorHandler from "./middlewares/errorHandler";
import slotRoutes from "./routes/slotRoutes";
import bookingRoutes from "./routes/bookingRoutes";
import cors from "cors";
import bodyParser from "body-parser";


require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api/slots', slotRoutes);
app.use('/api/booking', bookingRoutes);

app.use(errorHandler);

export default app