import { createContext, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { userData } from "../service/userService";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [user, setUser] = useState([]);
  const [fullUser, setFullUser] = useState(null)
  const [fullStorage, setFullStorage] = useLocalStorage('fullUser', {})
  const [userStorage, setUserStorage] = useLocalStorage('userData', {});
 
  return (
    <UserContext.Provider value={{ user, setUser, userStorage, setUserStorage, fullUser, setFullUser, fullStorage, setFullStorage }}>
      {children}
    </UserContext.Provider>
  );
}
