function Post({ postData }) {
  return (
    <div className="flex flex-row items-center justify-center gap-x-5 border-2">
      <div className="border-r text-center w-1/2">{postData.title}</div>
      <div className="border-l text-center w-1/2">
        {postData.message}
      </div>
    </div>
  );
}

export default Post;
