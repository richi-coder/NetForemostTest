function Item({ item }) {
  return (
    <div className="flex flex-row justify-around">
    <li className={`border rounded-md px-5 py-3 text-center hover:scale-110 transition-all ${item.importance ? 'border-green-500' : 'border-red-500 border rounded-md'}`}>{item.content}</li>
    <button>{item.importance ? 'Make non important' : 'Make important'}</button>
    </div>
  )
}

export default Item