function BorderHOC(Component) {
  return (props) => {
    return (
    <div className="border-4 border-red-500 rounded-lg">
        <div className="text-red-500 text-2xl font-bold italic">Debugging Component!</div>
        <Component {...props} />
    </div>
    )
  }
}

export default BorderHOC