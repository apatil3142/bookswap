import { useCallback, useEffect, useState } from "react";
import { getAllBooks } from "../services/bookService";
import styled from "styled-components";
import { IBook } from "../interface";
import BookCard from "../components/BookCard";
import InputField from "../components/InputField";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  gap: 20px;
`;

const BooksContainer = styled.div`
  width:100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SearchContainer = styled.div`
  >div{
    max-width: 620px;
    width: 620px;
  }
`;

const MyBooks = styled.div`
  padding: 10px 16px;
  border-radius: 30px;
  background-color: ${({theme}) => theme.dark};
  cursor: pointer;
  color: #FFF;
`;

const Books = () => {
  const [booksList, setBooksList] = useState<IBook[]>([]);

  const getBooks = useCallback(async() => {
    const res = await getAllBooks();
    if(res.data){
      setBooksList([...res.data])
    }
    console.log(res, 'books');
  },[]);

  useEffect(() => {
    getBooks();
  },[getBooks]);

  return (
    <Container>
      <Header>
        <FilterContainer>
          <SearchContainer>
            <InputField />
          </SearchContainer>
          <MyBooks>My Books</MyBooks>
        </FilterContainer>
      </Header>
      <BooksContainer>
        {booksList.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </BooksContainer>
    </Container>
  )
}

export default Books;
