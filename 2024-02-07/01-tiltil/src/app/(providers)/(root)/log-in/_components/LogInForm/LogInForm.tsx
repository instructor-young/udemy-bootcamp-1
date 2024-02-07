"use client";

import API from "@/api";
import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

function LogInForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const router = useRouter();

  const { mutate, isPending } = useMutation({ mutationFn: API.auth.logIn });

  const auth = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    mutate(
      { id, pw },
      {
        onSuccess: () => {
          auth.setIsLoggedIn(true);
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4 items-center"
    >
      <input
        className="border max-w-60"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID"
        type="text"
      />
      <input
        className="border max-w-60"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="PW"
        type="password"
      />
      <button
        type="submit"
        className="bg-sky-500 disabled:bg-red-500"
        disabled={isPending}
      >
        로그인하기
      </button>
    </form>
  );
}

export default LogInForm;
