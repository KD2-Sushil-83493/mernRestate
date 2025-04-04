import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { error } from 'console';
import userRouter from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{console.log("Connected to Mongo DB!")})
.catch((err)=>{console.log(err)});

const app= express();

app.listen(3000, ()=>{
    console.log('Server Started on port 3000');
});

app.use('/api/user', userRouter);