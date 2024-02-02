import { createContext, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";

const initialAuthContextValue = {
  isLoggedIn: false,
  logIn: () => {},
};
export const AuthContext = createContext(initialAuthContextValue);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    isLoggedIn,
    logIn: () => setIsLoggedIn(true),
  };

  return (
    <AuthContext.Provider value={value}>
      <HomePage />
    </AuthContext.Provider>
  );
}

export default App;
