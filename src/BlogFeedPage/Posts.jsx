import Post from "./Post";
import { v4 as uuidv4 } from 'uuid'

function Posts({ postsState }) {
    const posts = postsState.map(post => <Post key={uuidv4()} postData={post} />)

  return (
    <>
        {
            posts.length > 0 ?
            posts :
            <div>No hay posts para mostrar</div>
        }
    </>
  )
}

export default Posts