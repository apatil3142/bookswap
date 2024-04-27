import mongoose , { Document, Schema } from "mongoose";

export interface IUser extends Document{
  _id: string
  name: string;
  email: string;
  password: string | undefined
}

const UserSchema: Schema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
    unique: true
  },
  email:{
      type: String,
      require: true,
      unique: true
  },
  password:{
      type:String,
      require:true
  },
}, {timestamps: true})

export default mongoose.model<IUser>("User",UserSchema)

