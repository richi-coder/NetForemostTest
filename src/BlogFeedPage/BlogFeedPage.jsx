import Form from "./Form";
import Posts from "./Posts";
import useForm from "../Hooks/useForm";
import usePosts from "../Hooks/usePosts";

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