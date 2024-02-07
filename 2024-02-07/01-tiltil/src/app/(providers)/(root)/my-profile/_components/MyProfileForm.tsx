"use client";

import API from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function MyProfileForm() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const { data: myProfile, isLoading } = useQuery({
    queryKey: ["my-profile"],
    queryFn: API.user.getProfile,
  });

  useEffect(() => {
    if (!myProfile) return;

    setName(myProfile.name);
    setNickname(myProfile.nickname);
  }, [myProfile]);

  const handleClickSave = () => {
    // useMutation에서 mutate Fn 꺼내서 사용하면 되고
  };
  const handleClickCancel = () => {
    if (!myProfile) return;

    setName(myProfile.name);
    setNickname(myProfile.nickname);
    setIsEditMode(false);
  };

  if (isLoading) return <div>프로필 불러오는 중...</div>;
  if (!myProfile) return <div>에러가 발생했습니다...</div>;

  return (
    <div>
      <button onClick={() => setIsEditMode(true)}>수정하기</button>
      <hr />
      <input
        placeholder="이름"
        disabled={!isEditMode}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="닉네임"
        disabled={!isEditMode}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      {isEditMode && (
        <>
          <button onClick={handleClickSave}>저장하기</button>
          <button onClick={handleClickCancel}>취소하기</button>
        </>
      )}
    </div>
  );
}

export default MyProfileForm;
