import { useEffect, useState } from "react";

function NotMemoizing({ delayFunction }) {
    const [inputState, setInputState] = useState('');
    
    const calc = delayFunction(inputState);

    const handleChange = (e) => {
        setInputState(e.target.value)
    }

    useEffect(() => {
        console.log('effecting!');
      }, [calc])

  return (
    <form className="border-4">
          <h2>Try typping <strong>(not using useMemo)!</strong>!</h2>
          <input onChange={handleChange} type="text" name="" id="" value={inputState} className="pr-5 border-2" />
          <button type="submit" className="border-2 border-blue-800 hover:border-blue-400 hover:border-4 transition-all">Submit</button>
          <div className="italic">This message changes when typping (and slowly): <span className="font-bold text-red-500">{calc}</span></div>
    </form>
  )
}

export default NotMemoizing