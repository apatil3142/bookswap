import api from './api';


export const getAllBooks = async () => {
  const res = await api.apiInstance.get('/book/allbooks');
  return res;
};

export const bookService = {
  getAllBooks,
}