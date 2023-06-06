import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import styled from 'styled-components';
import HomePage from "./page/HomePage/HomePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Content>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Content>
      </BrowserRouter>
    </>
  );
}

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #059B9A;
  display: flex;
  justify-content: center;
  align-items: center;
`;
