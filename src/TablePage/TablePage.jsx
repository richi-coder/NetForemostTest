import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { fetchPosts } from "../services/fetchPosts";
import RowPost from "./RowPost";
import { v4 as uuidv4 } from 'uuid';

const LazyFooter = lazy(() => import('./LazyFooter'));

function Table() {
    const [postsFetched, setPostsFetched] = useState([])
    const value = useRef('About to update!')
    const [bottomScroll, setBottomScroll] = useState(false)
    const containerRef = useRef();

    useEffect(() => {
        fetchPosts().then(res => {
            setPostsFetched(res)
            value.current = 'Updated!'
        })
          
    }, [])

    const handleClick = () => {
      setBottomScroll(true)
    }

    
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
      <div ref={containerRef} className="bg-blue-500 w-screen h-24">
      {
        bottomScroll ?
        <Suspense fallback={<div className="bg-pink-500 w-screen h-[30vh] text-white">CARGANDO</div>}>
            <LazyFooter />
        </Suspense> :
        null
      }
      </div>
      <button onClick={handleClick} className="bg-yellow-500 rounded-lg px-3 py-2 text-xl">SHOW LAZY FOOTER</button>
      <p>Code splitting used in here!</p>
    </div>
  );
}

export default Table;
