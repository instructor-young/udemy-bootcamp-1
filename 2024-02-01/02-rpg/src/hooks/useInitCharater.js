import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { moveActionCreator } from "../redux/reducers/character.reducer";

export default function useInitCharacter() {
  const dispatch = useDispatch();

  const move = (e) => {
    const key = e.key;
    if (!key.includes("Arrow")) return;

    const direction = key.replace("Arrow", "").toLowerCase();
    dispatch(moveActionCreator(direction));
  };

  useEffect(() => {
    window.addEventListener("keydown", move);
  }, []);
}
