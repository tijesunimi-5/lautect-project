import { createContext, useContext, useState } from "react";

// Create User Context
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// UserProvider to wrap around components that need access to user data
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user state to null

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
