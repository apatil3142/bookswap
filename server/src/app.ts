import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRoute from "./routes/auth";
import bookRoute from "./routes/book";
import { CustomError } from './error';

const app = express();

dotenv.config();
const PORT = 8000;

const connect = ()=>{
  mongoose.connect(process.env.MONGO_URL!)
  .then(()=>{
      console.log("Connected to DB");
  })
  .catch((err)=>{
      throw err;
  });
}

app.use(cookieParser())
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/book', bookRoute);

app.use((err: CustomError, req: Request, res: Response, next: NextFunction)=>{
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
      success: false,
      status: status,
      message: message,
  });
});

app.listen(PORT, () => {
  connect();
  console.log('Server running on port ' + PORT); 
})