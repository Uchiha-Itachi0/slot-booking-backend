import express from "express"
import errorHandler from "./middlewares/errorHandler";
import slotRoutes from "./routes/slotRoutes";


require("dotenv").config();

const app = express();

app.use(express.json());
app.use('/api/slots', slotRoutes);

app.use(errorHandler);

export default app