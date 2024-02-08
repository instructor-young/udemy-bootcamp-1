"use client";
import API from "@/api/index.api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
  logIn: (accessToken: string) => void;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
  logIn: () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const logIn = (accessToken: string) => {
    setIsLoggedIn(true);
    API.setAccessToken(accessToken);
  };

  useEffect(() => {
    router.replace("/");
  }, [router, isLoggedIn]);

  const value: AuthContextValue = { isLoggedIn, logIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
