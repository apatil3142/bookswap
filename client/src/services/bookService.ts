import { IAddNewBookPayload } from '../interface';
import api from './api';


export const getAllBooks = async () => {
  const res = await api.apiInstance.get('/book/allbooks');
  return res;
};

export const addNewBook = async (payload: IAddNewBookPayload) => {
  const res = await api.apiInstance.post('/book/addnewbook' , {...payload});
  return res;
}

export const bookService = {
  getAllBooks,
}