import { useCallback, useEffect, useMemo, useState } from "react";

const list = ['first response', 'better response', 'testing response', 'another response!'];

function delayFunction(input) {
    console.log('calc function');
    const index = Math.round(Math.random() * 3);
    for (let i = 0; i < 500; i ++) {
        console.log('Doing slow calculations at first render only...');
    }
    return list[index];
}

function Memo() {
    const [inputState, setInputState] = useState('');
    const [num1] = useState(0)
    const [num2] = useState(0)
    console.log('rendering!');
    
    const calc = useMemo(() => delayFunction(inputState), []);

    // const sum  = () => num1 + num2;

    useEffect(() => {
      console.log('effecting!');
    }, [calc])

    const handleChange = (e) => {
        setInputState(e.target.value)
    }

  return (
    <form className="border-4">
        <div>{calc}</div>
        <h2>Try typping with and without useMemo!</h2>
        <input onChange={handleChange} type="text" name="" id="" value={inputState} className="pr-5 border-2" />
        <button type="submit" className="border-2">Submit</button>
    </form>
  )
}

export default Memo