import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import { connect } from "mongoose";
import router from "./routes/Quizrouter.js";
import cors from 'cors';


const app = express();
dotenv.config();
//middleware
app.use(express.json());

app.use(cors())
const port = process.env.PORT;
const mongodbs = process.env.DB_URL;

//routee middleware
app.use("/api/quiz", router)

app.listen(port, (e) => {
    if (e) console.log(e);
    console.log(`server running on ${port}`);

    mongoose.connect(mongodbs)
        .then(() => console.log("database connected"))
        .catch((err) => console.log(err))

});