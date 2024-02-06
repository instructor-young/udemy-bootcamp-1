import React from "react";
import { useProfile } from "../../contexts/profile.context";

function LikeButton({ movie }) {
  const { likedMovies, setLikedMovies } = useProfile();

  const handleClickLike = (e) => {
    e.preventDefault();

    setLikedMovies((prevLikedMovies) => [...prevLikedMovies, movie]);
  };

  const handleClickUnlike = (e) => {
    e.preventDefault();

    setLikedMovies((prevLikedMovies) =>
      prevLikedMovies.filter((_movie) => _movie.id !== movie.id)
    );
  };

  const isLiked = !!likedMovies.find(
    (likedMovie) => likedMovie.id === movie.id
  );

  return isLiked ? (
    <button onClick={handleClickUnlike}>좋아요 취소</button>
  ) : (
    <button onClick={handleClickLike}>좋아요</button>
  );
}

export default LikeButton;
