"use client";

import API from "@/api/index.api";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";

function SignUpPage() {
  const { mutateAsync } = useMutation({ mutationFn: API.auth.signUp });
  const idInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const pw2InputRef = useRef<HTMLInputElement>(null);
  const { logIn } = useAuth();

  const handleClickSignUp = async () => {
    const idValue = idInputRef.current?.value;
    const pwValue = pwInputRef.current?.value;
    const pw2Value = pw2InputRef.current?.value;

    if (!idValue || !pwValue || !pw2Value)
      return alert("모든 값을 입력해 주세요");

    if (pwValue !== pw2Value)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않아요");

    const { accessToken } = await mutateAsync({ id: idValue, pw: pwValue });
    logIn(accessToken);
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
