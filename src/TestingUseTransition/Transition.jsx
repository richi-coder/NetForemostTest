import { useState } from "react"
import Toggle from "./Toggle"
import ListItems from "./ListItems"

const initialState = new Array(5000).fill({
    content: 'heey',
    importance: true
}).map((item,index) => {
    if (index % 2 === 0) {
        return {
            content: 'heey',
            importante: false
        }
    } else {
        return item
    }
})

function Transition() {
    const [list, setList] = useState(initialState);
    const [which, setWhich] = useState('all')


    const toggleImportance = (toWhich) => {
        setWhich(prev => toWhich)
        console.log(toWhich, 'whiich');
        const updatedList = toWhich === 'all' ? initialState : toWhich === 'important'? initialState.filter(item => item.importance) : initialState.filter(item => !item.importance)
        setList(updatedList)
    }

  return (
    <div className="mt-5">
        <Toggle toggleImportance={toggleImportance} />
        <div className="italic">Showing which? : <strong>{which}</strong></div>
        <ListItems list={list} />
    </div>
  )
}

export default Transition