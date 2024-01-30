import React, { useState } from "react";

function SignUpForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");

  const handleClickSignUp = () => {
    if (password !== password2)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");

    const data = {
      id,
      password,
      nickname,
      gender,
    };

    console.log(data);
  };

  return (
    <div>
      <h2>회원가입 양식</h2>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 200,
          margin: "0 auto",
          rowGap: 12,
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="ID 입력해 주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="PW 입력해 주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="PW를 한 번 더 입력해 주세요"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <input
          type="text"
          placeholder="닉네임을 입력해 주세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <div style={{ display: "flex" }}>
          <div>
            <input
              id="gender-female"
              type="radio"
              name="gender"
              value="female"
              checked={gender === "여자"}
              onChange={(e) => e.target.checked === true && setGender("여자")}
            />
            <label htmlFor="gender-female">여자</label>
          </div>

          <div>
            <input
              id="gender-male"
              type="radio"
              name="gender"
              value="male"
              checked={gender === "남자"}
              onChange={(e) => e.target.checked === true && setGender("남자")}
            />
            <label htmlFor="gender-male">남자</label>
          </div>
        </div>

        <button onClick={handleClickSignUp}>가입하기</button>
      </form>
    </div>
  );
}

export default SignUpForm;
