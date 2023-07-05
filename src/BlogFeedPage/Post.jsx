function Post({ postData }) {
  return (
    <div>
      <div>{postData.title}</div>
      <div>
        {postData.message}
      </div>
    </div>
  );
}

export default Post;
