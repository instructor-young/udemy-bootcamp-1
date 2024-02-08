"use client";

import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import { PropsWithChildren } from "react";

interface ModalProps {
  title: string;
}

function Modal({ title, children }: PropsWithChildren<ModalProps>) {
  const dispatch = useAppDispatch();

  const handleClickBackdrop = () => {
    const action = setModal(null);
    dispatch(action);
  };

  return (
    <div
      className="fixed top-0 left-0 bg-black/50 w-screen h-screen z-30"
      onClick={handleClickBackdrop}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-screen-sm mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-12 shadow-2xl drop-shadow-2xl rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
