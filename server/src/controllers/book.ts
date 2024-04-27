import { NextFunction, Request, Response } from "express";
import Book from "../models/Book";
import { createError } from "../error";
import mongoose from "mongoose";

// GET ALL BOOKS
export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allbooks = await Book.find().populate('postedBy', '_id name').sort('-createdAt');
    if(allbooks.length === 0) return next(createError(404, 'Books not found'));
    res.status(200).json(allbooks);
  } catch (error) {
    next(error);
  }
};

// POST (ADD NEW BOOK)
export const addNewBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {title, abbreviation, amount, city, image, cloudinaryId} = req.body;
    if(!title || !abbreviation || !amount || !city || !image || !cloudinaryId){
      if(!image){
        return next(createError(400, 'Please upload image of your book'));
      }
      return next(createError(400, 'Please fill all the fields'));
    }
    req.user.password = undefined;
    const { id: postedBy } = req.user;
    const newBook = new Book({
      title,
      abbreviation,
      amount,
      city,
      image,
      cloudinaryId,
      postedBy
    })
    await newBook.save();
    res.status(200).json(newBook);
  } catch (error) {
    next(error);
  }
}

//DELETE BOOK
export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.body;
    if(!id) return next(createError(404, 'Valid Book ID is not provided'));

    const book = await Book.findById(req.body.id);
    if(!book) return next(createError(404, 'Book is not found'));

    //Check if user is deleting theirs book only.
    if(req.user.id === book.postedBy.toString()){
      await Book.findByIdAndDelete(id);
      res.status(200).json("The Book has been deleted");
    }else{
      next(createError(403, 'You can only delete your books'));
    }

  } catch (error) {
    next(error);
  }
};

//GET SINGLE BOOK
export const getSingleBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookId = req.params.bookId;
    if(!bookId) return next(createError(403, 'Book is not provided'));

    const book = await Book.findById(bookId).populate('postedBy', '_id name');
    if(!book) {
      return next(createError(404, 'Book not found'));
    }else{
      res.status(200).json(book);
    }

  } catch (error) {
    next(error)
  }
};

// GET MY BOOKS
export const getMyBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // if(req.user.id){
      
      // const userId = new mongoose.Types.ObjectId(req.user.id);
      const myBooks = await Book.find({postedBy: req.user.id}).populate('postedBy', '_id name');
      res.status(200).json(myBooks);
    // }else{
    //   next(createError(400, 'Not authenticated'));
    // }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

