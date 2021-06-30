export const Todolist = () => {
  const tempItems = ['buy bananas', 'finish todolist']

  return <ul className="m-4 p-4 border rounded-md border-gray-500 divide-y">{tempItems.map((item, idx) =>
    <li className="py-4" key={`${item}${idx}`}><input type="checkbox" />{' '}{item}</li>
  )}</ul>
}
