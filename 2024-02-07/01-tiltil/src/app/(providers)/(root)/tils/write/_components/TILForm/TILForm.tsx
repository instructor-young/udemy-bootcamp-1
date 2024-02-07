"use client";

import API from "@/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

function TILForm() {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: API.tils.createTil,
    onSuccess: (newTil, data) => {
      const id = newTil.id;
      router.push(`/tils/${id}`);
    },
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    mutate({ title, content });
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

      <button
        type="submit"
        disabled={isPending}
        className="bg-sky-500 disabled:bg-red-500"
      >
        작성하기
      </button>
    </form>
  );
}

export default TILForm;
