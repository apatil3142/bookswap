import styled from "styled-components"
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Chats from "./pages/Chats";

const Container = styled.div`
  height: 100vh;
  max-width: 1366px;
  margin: auto;
`; 

const MainContainer = styled.div`
  height: calc(100vh - 60px);
  overflow-y: scroll;
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
              <Route path="/chats" element={<Chats />} />
            </Routes>
          </MainContainer>
      </Container>
    </BrowserRouter>
  )
}

export default App
