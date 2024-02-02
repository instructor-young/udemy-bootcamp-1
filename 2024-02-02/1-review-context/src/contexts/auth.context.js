import React, { createContext, useMemo, useState } from "react";

const initialAuthContextValue = {
  isLoggedIn: false,
  toggleLogIn: () => {},
  userId: null,
  setUserId: () => {},
};
export const AuthContext = createContext(initialAuthContextValue);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  console.log("리렌더 AuthProvider");

  const value = useMemo(
    () => ({
      isLoggedIn,
      toggleLogIn: () => setIsLoggedIn((prev) => !prev),
      userId,
      setUserId,
    }),
    [userId, isLoggedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
