import Item from "./Item"

function ListItems({ list }) {
  return (
    <ul className="w-full mx-0 flex flex-col gap-y-5 my-5">
        {
            list.map((item,index) => <Item key={`${item.content}-${index}`} item={item} />)
        }
    </ul>
  )
}

export default ListItems