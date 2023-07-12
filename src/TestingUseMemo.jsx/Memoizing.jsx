import { useEffect, useMemo, useState } from "react";

function Memoizing({ delayFunction }) {
    const [inputState, setInputState] = useState('');
    
    const calc = useMemo(() => delayFunction(inputState), []);

    const handleChange1 = (e) => {
        setInputState(e.target.value)
    }

    useEffect(() => {
        console.log('effecting!');
      }, [calc])

  return (
    <form className="border-4">
          <h2>Try typping <strong>(using useMemo)!</strong></h2>
          <input onChange={handleChange1} type="text" name="" id="" value={inputState} className="pr-5 border-2" />
          <button type="submit" className="border-2 border-blue-800 hover:border-blue-400 hover:border-4 transition-all">Submit</button>
          <div className="italic">This message does not change when typping: <span className="font-bold text-red-500">{calc}</span></div>
    </form>
  )
}

export default Memoizing