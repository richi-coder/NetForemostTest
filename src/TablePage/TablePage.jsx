import { useEffect, useRef, useState } from "react";
import { fetchPosts } from "../services/fetchPosts";
import RowPost from "./RowPost";
import { v4 as uuidv4 } from 'uuid';

function Table() {
    const [postsFetched, setPostsFetched] = useState([])
    const value = useRef('About to update!')

    useEffect(() => {
        fetchPosts().then(res => {
            setPostsFetched(res)
            value.current = 'Updated!'
        })
    }, [])

    
  return (
    <div>
      <div>{value.current}</div>
      <h1 className="font-bold">Mis publicaciones</h1>
      <p className="italic">Apartado de posts</p>
      <table className="w-full">
        <thead>
          <tr className="border-4 border-blue-500">
            <td>Title</td>
            <td>Body</td>
          </tr>
        </thead>
        <tbody>
            {
                postsFetched.length > 0 ?
                postsFetched.map(post => <RowPost key={uuidv4()} title={post.title} message={post.body} id={post.id} />) :
                null
            }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
