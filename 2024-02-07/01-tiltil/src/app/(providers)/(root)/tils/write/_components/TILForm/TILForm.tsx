"use client";

import { useMutation } from "@tanstack/react-query";
import { FormEventHandler, useState } from "react";

function TILForm() {
  const { mutate } = useMutation({
    mutationFn: async () => {
      console.log(111);

      throw new Error("에렁..");
      return;
    },
    onMutate: () => {
      console.log(123123);
    },
    onError: () => {
      console.log("에러발생");
    },
    onSuccess: () => {
      console.log("난 성공");
    },
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    mutate();

    // const url = `${window.location.origin}/api/til`;
    // const options = {
    //   method: "POST",
    //   body: JSON.stringify({ title, content }),
    // };
    // const response = await fetch(url, options);
    // const data = await response.json();

    // console.log("Data", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto border flex flex-col w-full max-w-screen-sm gap-y-5 p-8"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-black"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border border-black"
      />

      <button type="submit">작성하기</button>
    </form>
  );
}

export default TILForm;
