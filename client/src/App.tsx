import styled from "styled-components"
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Chats from "./pages/Chats";
import SecureRoute from "./SecureRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sale from "./pages/Sale";

const Container = styled.div`
  height: 100vh;
  max-width: 1366px;
  margin: auto;
`; 

const MainContainer = styled.div`
  height: calc(100vh - 60px);
  overflow-y: auto;
  background-color: ${({theme}) => theme.extraLight};
  scrollbar-gutter: auto;
  padding: 10px;
`;

function App() {

  return (
    <BrowserRouter>
      <Container>
        <Navbar />
          <MainContainer>
            <Routes>
              <Route index path="/" element={<Books />} />
              <Route element={<SecureRoute/>}>
                <Route path="/chats" element={<Chats />} /> 
                <Route path='/sale' element={<Sale />} />
              </Route>
              <Route path='/signin' element={<Login />} />
              <Route path='/signup' element={<Register />} />
            </Routes>
          </MainContainer>
      </Container>
    </BrowserRouter>
  )
}

export default App
