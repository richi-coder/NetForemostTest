import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { fetchOnePost, fetchPosts } from "../services/fetchPosts";


const fetchProcess = (postID = 1) => {
    let status = 'pending';
    let result;
    let fetching = fetchPosts()
                        .then(
                            res => {
                            status = 'success'
                            result = res[postID - 1];
                            console.log(res);
                            },
                            err => {
                            status = 'error'
                            result = err
                        })

    return {
            read()  {
                    if (status == 'pending') {
                        throw fetching
                    } else if (status === 'error') {
                        throw result
                    } else if (status === 'success') {
                        return result
                    }
                }
            }   
}

const resource = fetchProcess();

export default function PostPage() {
    let postToShow = resource.read()
    
    return <div>{JSON.stringify(postToShow)}READY</div>
}