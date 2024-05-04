import React, { useCallback } from 'react'
import { IBook } from '../interface'
import styled from 'styled-components';
import bookImg from '../assets/books.jpg';
import { getTimeSince } from '../utils';

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #FFF;
  border-radius: 8px;
  cursor: pointer;
  &:hover{
    transform: scale(1.04);
  }
  transition: all 0.3s ease;
`;

const BookImg = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
`;

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

const BookDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Panel = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Span = styled.span`
  font-weight: 500;
`;

interface IBookCardProps {
  book: IBook;
}

const BookCard: React.FC<IBookCardProps> = ({book}) => {

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = bookImg;
  },[]);

  console.log(book.createdAt, 'book.createdaAt')

  return (
    <Container>
      <BookImg src={book.image} onError={handleImageError} />
      <BookDetails>
        <Title>{book.title}</Title>
        <BookDescription>
          <Panel>
            <Span>₹ {book.amount} | {book.postedBy.name} | {getTimeSince(book.createdAt)}</Span>
          </Panel>
        </BookDescription>
      </BookDetails>
      
    </Container>
  )
}

export default BookCard
