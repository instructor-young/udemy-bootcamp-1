"use client";

import API from "@/api";
import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { FormEventHandler, useState } from "react";

function LogInForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const auth = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    API.auth.logIn({ id, pw });
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
      <button type="submit">로그인하기</button>
    </form>
  );
}

export default LogInForm;
