"use client";

import Page from "@/components/Page";
import { useRef } from "react";

function SignUpPage() {
  const idInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const pw2InputRef = useRef<HTMLInputElement>(null);

  const handleClickSignUp = () => {
    const idValue = idInputRef.current?.value;
    const pwValue = pwInputRef.current?.value;
    const pw2Value = pw2InputRef.current?.value;

    if (!idValue || !pwValue || !pw2Value)
      return alert("모든 값을 입력해 주세요");

    if (pwValue !== pw2Value)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않아요");

    // 회원가입~
  };

  return (
    <Page>
      <input ref={idInputRef} placeholder="ID" />
      <input ref={pwInputRef} placeholder="PW" />
      <input ref={pw2InputRef} placeholder="PW2" />

      <button onClick={handleClickSignUp}>회원가입하기</button>
    </Page>
  );
}

export default SignUpPage;
