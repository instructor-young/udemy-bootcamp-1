"use client";

import { FormEventHandler, useState } from "react";

function TILForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/til`;
    const options = {
      method: "POST",
      body: JSON.stringify({ title, content }),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    console.log("Data", data);
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit">작성하기</button>
    </form>
  );
}

export default TILForm;
