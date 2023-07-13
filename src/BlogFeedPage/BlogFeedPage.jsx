import Form from "./Form";
import Posts from "./Posts";
import useForm from "../hooks/useForm";
import usePosts from "../hooks/usePosts";

function BlogFeedPage() {
  const [form, updateForm] = useForm();
  const [posts, updatePostList] = usePosts()

  return (
    <>
      <Form form={form} updateForm={updateForm} updatePostList={updatePostList} />
      <Posts postsState={posts} />
    </>
  )
}

export default BlogFeedPage;