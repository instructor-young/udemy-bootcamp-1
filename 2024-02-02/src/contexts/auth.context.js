import { createContext, useState } from "react";

const initialAuthContextValue = {
  isLoggedIn: false,
  toggleLogIn: () => {},
};
export const AuthContext = createContext(initialAuthContextValue);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("리렌더 AuthProvider");

  const value = {
    isLoggedIn,
    toggleLogIn: () => setIsLoggedIn((prev) => !prev),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
