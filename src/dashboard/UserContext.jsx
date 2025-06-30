// src/UserContext.js
import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUsername, setLoggedInUsername] = useState("");

  return (
    <UserContext.Provider value={{ loggedInUsername, setLoggedInUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
