import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4299e1; 
  padding: 10px 16px;
  width: 100%; 
  margin-top: 0.25rem;
  border-radius: 0.5rem; 
  font-weight: 600;
  color: #fff;
  transition: all 0.3s ease;
  outline: none;
  border: none;
  font-size: 18px;
  &:hover {
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
    cursor: pointer;
    letter-spacing: 1.5px;
  }

  &:active {
    box-shadow: none;
  }
`;

interface IButtonProps {

}

type IButtonPropType = IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<IButtonPropType> = ({children, ...props}) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

export default Button;
