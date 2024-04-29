import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  width: 100%;
  padding: 10px;
  background-color: ${({theme}) => theme.extraDark};
  display: flex;
  justify-content: space-between;
  color: #FFF;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
`;

const Profile = styled.div`

`;

const Menus = styled.div`
  display: flex;
  gap: 30px;
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  >a{
    text-decoration: none;
    color: inherit;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Logo>BookSwap</Logo>
      <Menus>
        <MenuItem><NavLink to='/'>Books</NavLink></MenuItem>
        <MenuItem><Link to='/chats'>Chats</Link></MenuItem>
      </Menus>
      <Profile>User</Profile>
    </Container>
  )
}

export default Navbar;
