import { createContext, useContext, useState } from "react";

const initialValue = {
  nickname: "",
  updateNickname: () => {},
  likedMovies: [],
  setLikedMovies: () => {},
};

const ProfileContext = createContext(initialValue);

export const useProfile = () => useContext(ProfileContext);

export function ProfileProvider({ children }) {
  const [nickname, setNickname] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);

  const updateNickname = (newNickname) => {
    setNickname(newNickname);
  };
  const value = { nickname, updateNickname, likedMovies, setLikedMovies };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export default ProfileContext;
