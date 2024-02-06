function PostDetailPage(props: { params: { postId: string } }) {
  const params = props.params;
  const postId = params.postId;

  return <div>이곳은 포스트 상세 페이지입니다.!!! {postId} !!!</div>;
}

export default PostDetailPage;
