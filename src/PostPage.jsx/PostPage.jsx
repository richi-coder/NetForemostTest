import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { fetchPosts } from "../services/fetchPosts";

function PostPage() {
    const params = useParams();
    const postID = params.query;
    const [postToShow, setPostToShow] = useState({
        title: '',
        body: ''
    })

    useEffect(() => {
        fetchPosts().then(res => setPostToShow(res[postID - 1]))
    }, [])
    

  return (
    <div>
        {
            postToShow.length != '' ?
            <>
                <h1>{postToShow.title}</h1>
                <div>{postToShow.body}</div>
            </>
             :
            null
        }
        
    </div>
  )
}

export default PostPage