import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../redux/store';

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

const UserProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.light};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
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
  const {user} = useSelector((state: RootState) => state.user);
  return (
    <Container>
      <Logo>BookSwap</Logo>
      <Menus>
        <MenuItem><NavLink to='/'>Books</NavLink></MenuItem>
        <MenuItem><Link to='/chats'>Chats</Link></MenuItem>
        <MenuItem><NavLink to='/sale'>Sale</NavLink></MenuItem>
      </Menus>
      <Profile>
        {
          user ? 
          <UserProfile>{user.name.charAt(0).toUpperCase()}</UserProfile>:
          <></>
        }
      </Profile>
    </Container>
  )
}

export default Navbar;
