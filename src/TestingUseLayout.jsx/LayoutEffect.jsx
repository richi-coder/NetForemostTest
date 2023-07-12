import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { fetchPosts } from '../Services/fetchPosts';

function LayoutEffect() {
    const stateRef = useRef();

    // useLayoutEffect(() => {
    //         console.log('layout');
    //         if (stateRef.current.style.left == '') stateRef.current.style.marginLeft = '0px'
    //         stateRef.current.style.marginLeft = '50px'
    // }, [])

    useEffect(() => {
            console.log('effect');
            if (stateRef.current.style.left == '') stateRef.current.style.marginLeft = '0px'
            stateRef.current.style.marginLeft = '50px'
    }, [])



  return (
    <div>
        <div className='italic' ref={stateRef} >Check flash here!</div>
        <div className='font-bold text-2xl'>Refresh the page!</div>
    </div>
  )
}

export default LayoutEffect