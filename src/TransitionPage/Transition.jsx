import { useState, useTransition } from "react"
import Toggle from "./Toggle"
import ListItems from "./ListItems"
import FirstUpdate from "./FirstUpdate"
import Loader from "./Loader"

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
    const [which, setWhich] = useState('all');
    const [isPending, setTransition] = useTransition()


    const toggleImportance = (toWhich) => {
        setWhich(toWhich)
        setTransition(() => {
            const updatedList = toWhich === 'all' ? initialState : toWhich === 'important'? initialState.filter(item => item.importance) : initialState.filter(item => !item.importance)
            setList(updatedList)
        })
    }

  return (
    <div className="mt-5 flex flex-col gap-y-3">
        <Toggle toggleImportance={toggleImportance} />
        <FirstUpdate which={which} />
        {
            isPending ?
            <Loader /> :
            <ListItems list={list} />
        }
    </div>
  )
}

export default Transition