import React from "react";

function SignUpForm() {
  const inputClassName =
    "bg-gray-100 border border-gray-500 px-4 py-2 outline-none focus:border-blue-500 rounded-md transition-colors";

  return (
    <div>
      <input className={inputClassName} />
      <input className={inputClassName} />
      <textarea className={inputClassName} />
      <button>회원가입하기</button>
    </div>
  );
}

export default SignUpForm;
