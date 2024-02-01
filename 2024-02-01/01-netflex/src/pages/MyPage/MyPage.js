import React, { useRef } from "react";
import MoviesListItem from "../../components/MoviesListItem";
import Page from "../../components/Page";
import { useProfile } from "../../contexts/profile.context";

function MyPage() {
  const { updateNickname, likedMovies } = useProfile();
  const nicknameInputRef = useRef(null);

  const handleClickUpdateNickname = () => {
    const inputValue = nicknameInputRef.current.value;
    updateNickname(inputValue);
  };

  return (
    <Page>
      <section>
        <h2>닉네임 수정</h2>
        <input
          ref={nicknameInputRef}
          type="text"
          placeholder="닉네임을 입력해 주세요"
        />
        <button onClick={handleClickUpdateNickname}>닉네임 바꾸기</button>
      </section>

      <section>
        <h2>좋아요 누른 영화 목록들</h2>
        <ul>
          {likedMovies.map((movie) => (
            <li key={movie.id}>
              <MoviesListItem movie={movie} />
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}

export default MyPage;
