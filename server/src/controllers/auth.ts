import User, { IUser } from "../models/User";
import bcrypt from "bcrypt"
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createError } from "../error";

export const signup = async (req: Request, res: Response,next: NextFunction)=>{
  try{
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password,salt);
      const newUser = new User({...req.body, password: hash});
      await newUser.save();
      res.status(200).send("User has been created");
  }catch(err){
      next(err);
  }
}

export const signin = async (req: Request,res: Response,next: NextFunction)=>{
  try{
    const user = await User.findOne({name: req.body.name});
    if(!user) return next(createError(404,"User not Found!"));

    if(user.password){
      const isCorrect = await bcrypt.compare(req.body.password, user.password);
      if(!isCorrect) return next(createError(400,"Wrong Credentials!"));
    }
    const token = jwt.sign({id: user._id}, process.env.JWT!)
    const userObject = user.toObject(); 
    const { password, ...others } = userObject;
    res.cookie("access_token",token,{
        httpOnly:true,
    })
    .status(200)
    .json(others);
  }catch(err){
      next(err);
  }
}