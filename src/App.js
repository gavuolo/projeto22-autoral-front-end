import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import styled from 'styled-components';
import HomePage from "./page/HomePage/HomePage";
import SignUpPage from "./page/SignUpPage/SignUpPage";
import { UserProvider } from "./context/userContext";
import Dashboard from "./page/Dashboard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Content>
          <GlobalStyle />
          <UserProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          </UserProvider>
        </Content>
      </BrowserRouter>
    </>
  );
}

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #095169;
  display: flex;
  justify-content: center;
  align-items: center;
`;
