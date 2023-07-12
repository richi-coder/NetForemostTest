function Toggle({ toggleImportance }) {
  return (
    <div className="flex flex-row justify-between text-xl">
        <button onClick={() => toggleImportance('all')}>Show all!</button>
        <button onClick={() => toggleImportance('important')}>Show important!</button>
        <button onClick={() => toggleImportance('non-important')}>Show non-important!</button>
    </div>
  )
}

export default Toggle