// import { ObjectId } from "mongodb";
import mongoose, { Document } from "mongoose";
const {ObjectId} = mongoose.Schema.Types

export interface IBook extends Document {
  title: string,
  abbreviation: string,
  amount: number,
  city: string,
  postedBy: typeof ObjectId,
  image: string,
  cloudinaryId: string
}

const BookSchema = new mongoose.Schema({
  title: {
    type: String, 
    require: true
  },
  abbreviation: {
    type: String, 
    require: true
  },
  amount: {
    type: Number, 
    require: true
  },
  city: {
    type: String, 
    require: true
  },
  postedBy: {
    type: ObjectId, 
    ref: 'User'
  },
  image: {
    type: String, 
    require: true
  },
  cloudinaryId: {
    type: String, 
    require: true
  }
},{timestamps: true});

export default mongoose.model<IBook>('Book', BookSchema);