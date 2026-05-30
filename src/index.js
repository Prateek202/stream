
import 'dotenv/config.js';

import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import express from "express";
import connectToDatabase from "./db/index.js";


connectToDatabase();
// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${proceess.env.MONGODB_URI}}/${DB_NAME}`)
//     }
//     catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error
//     }
// })();