"use client";

import { addItem } from "@/redux/slices/cart.slice";
import { useAppDispatch } from "@/redux/store";
import { Lecture } from "@/types/Lecture.type";

interface AddToCartButtonProps {
  lecture: Lecture;
}

function AddToCartButton({ lecture }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const handleClickButton = () => {
    const action = addItem(lecture);
    dispatch(action);
  };

  return <button onClick={handleClickButton}>장바구니에 담기</button>;
}

export default AddToCartButton;
