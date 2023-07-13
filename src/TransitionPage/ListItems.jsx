import Item from "./Item"

function ListItems({ list }) {
  return (
    <div className="border-4 border-blue-500 rounded-xl">
    <div className="mt-10">(The list updates second!)</div>
    <ul className="w-full mx-0 flex flex-col gap-y-5 my-5">
        {
            list.map((item,index) => <Item key={`${item.content}-${index}`} item={item} />)
        }
    </ul>
    </div>
  )
}

export default ListItems