import  jwt  from "jsonwebtoken";
import {createError} from "../error";
import { NextFunction, Request, Response } from "express";
import { IUser } from "../models/User";

// export interface IGetUserAuthInfoRequest extends Request {
//   user: IUser // or any other type
// }

export const verifyToken = (req: Request,res: Response,next: NextFunction)=>{
    const token = req.cookies?.access_token
    if(!token) return next(createError(401,"You are not Authenticated!"));

    jwt.verify(token, process.env.JWT!,(err: any,user: any)=>{
        if(err) return next(createError(403,"Token is not valid"));
        req.user = user;
        next();
    })
}