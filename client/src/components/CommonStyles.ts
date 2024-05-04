import styled from "styled-components";
import booksImg from '../assets/books.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  border-radius: 10px;
  display: flex;
  width: 750px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
`;

export const LeftBox = styled.div`
  background-image: url(${booksImg});
  flex: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  &:after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #6d6d6dab;
  }
`;

export const RightBox = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 30px;
`;

export const Header = styled.div`
  font-size: 30px;
  z-index: 9;
  font-weight: 600;
`;

export const Para = styled.p`
  text-align: center;
  z-index: 9;
  font-size: 20px;
  line-height: 1.5;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

interface ITextSizeTypes {size?: 'lg' | 'sm'}
export const Span = styled.span<ITextSizeTypes>`
  font-size: ${({size}) => size  && size === 'lg' ? '18px' : '16px'};
  display: flex;
  gap: 10px;
  >a{
    text-decoration: none;
    color: #4299e1;
    font-weight: 500;
    font-weight: bold;
    cursor: pointer;
  }
`;