import { createContext, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { userData } from "../service/userService";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [user, setUser] = useState([]);
  const tokenLocalStorage = localStorage.getItem("userToken");
  const [token, setToken] = useState(tokenLocalStorage);
  
  function addToken(response) {
    setToken(response.token);
    setUser(response);
    localStorage.setItem("userToken", token);
    localStorage.setItem("userStorage", user);
  }
 
  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, addToken }}>
      {children}
    </UserContext.Provider>
  );
}
