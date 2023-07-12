import { useCallback, useEffect, useMemo, useState } from "react";
import Memoizing from "./Memoizing";
import NotMemoizing from "./NotMemoizing";

const list = ['first response', 'better response', 'testing response', 'another response!'];

function delayFunction(input) {
    console.log('calc function');
    const index = Math.round(Math.random() * 3);
    for (let i = 0; i < 1500; i ++) {
        console.log('Doing slow calculations at first render only...');
    }
    return list[index];
}

function Memo() {
    console.log('rendering!');
    
    
  return (
    <div className="flex flex-col gap-y-5 my-10">
      <Memoizing delayFunction={delayFunction} />
      <NotMemoizing delayFunction={delayFunction} />
    </div>
  )
}

export default Memo