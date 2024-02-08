"use client";
import { createContext, useContext, useState } from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const value: AuthContextValue = { isLoggedIn };

  const logIn = () => {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
