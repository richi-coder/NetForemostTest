import { useEffect, useState } from "react";

function FirstUpdate({ which}) {
    const [whichClass, setWhichClass] = useState('')

    useEffect(() => {
        setWhichClass('scale-150 text-green-500')
        setTimeout(() => {
            setWhichClass('')
        }, 200);
    }, [which])
    

  return (
    <div className="border-4 border-purple-500 rounded-xl">
      <div>(Updates first only using useTransition)</div>
      <div className={`italic transition-all duration-150 ${whichClass}`}>
        Showing which? : <strong>{which}</strong>
      </div>
    </div>
  );
}

export default FirstUpdate;
