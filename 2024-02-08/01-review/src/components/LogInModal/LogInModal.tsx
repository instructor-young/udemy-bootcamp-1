"use client";

import API from "@/api/index.api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "../Modal";

function LogInModal() {
  const { mutateAsync } = useMutation({ mutationFn: API.auth.logIn });
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleClickLogIn = async () => {
    const accessToken = await mutateAsync({ id, pw });
  };

  return (
    <Modal title="로그인하기">
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <input value={pw} onChange={(e) => setPw(e.target.value)} />

      <button onClick={handleClickLogIn}>로그인하기</button>
    </Modal>
  );
}

export default LogInModal;
