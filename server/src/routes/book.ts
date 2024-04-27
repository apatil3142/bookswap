import express from 'express';
import { addNewBook, deleteBook, getAllBooks, getMyBooks, getSingleBook } from '../controllers/book';
import { verifyToken } from '../middlewares/verifyToken';

const router = express.Router();

router.get('/allbooks', getAllBooks);

router.post('/addnewbook', verifyToken, addNewBook);

router.delete('/deletebook', verifyToken, deleteBook);

router.get('/mybooks', verifyToken, getMyBooks);

router.get('/:bookId', getSingleBook);


export default router;