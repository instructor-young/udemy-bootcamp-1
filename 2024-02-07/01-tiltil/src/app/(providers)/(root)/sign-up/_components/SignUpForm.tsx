"use client";

import API from "@/api";
import { FormEventHandler, useRef } from "react";

function SignUpForm() {
  const idInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const pw2InputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const id = idInputRef.current?.value;
    const pw = pwInputRef.current?.value;
    const pw2 = pw2InputRef.current?.value;
    const name = nameInputRef.current?.value;

    if (pw !== pw2) return alert("비밀번호와 비밀번호 확인이 일치하지 않아요");
    if (!id || !pw || !pw2 || !name) return alert("모든 값을 입력해 주세요");

    const data = { id, pw, name };

    API.auth.signUp(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4 items-center"
    >
      <input
        className="border max-w-60"
        ref={idInputRef}
        placeholder="ID"
        type="text"
      />
      <input
        className="border max-w-60"
        ref={pwInputRef}
        placeholder="PW"
        type="password"
      />
      <input
        className="border max-w-60"
        ref={pw2InputRef}
        placeholder="PW Confirm"
        type="password"
      />
      <input
        className="border max-w-60"
        ref={nameInputRef}
        placeholder="Name"
        type="text"
      />

      <button type="submit">회원가입하기</button>
    </form>
  );
}

export default SignUpForm;
