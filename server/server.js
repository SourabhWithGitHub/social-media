import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { dbConnect } from "./dbConnect/dbConnect.js";
import routes from "./routes/route.js"


const app = express();
dotenv.config();

app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.use(express.json());
app.use(routes);



app.listen(5000, () => {
    console.log("Server is running");
    dbConnect();
});
