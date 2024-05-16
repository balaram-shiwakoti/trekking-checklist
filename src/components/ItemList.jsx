


const ItemList = ({ items, handleRemoveSingleItem, handleSingleIToggleItem }) => {

  return (
    <ul>
      {
        items.map((item) => {
          return <Items
            handleSingleIToggleItem={handleSingleIToggleItem} handleRemoveSingleItem={handleRemoveSingleItem}
            key={item.id}
            item={item} />
        })
      }

    </ul>
  )
}

export default ItemList

function Items({ item, handleRemoveSingleItem, handleSingleIToggleItem }) {
  return (
    <li className="item" >
      <label  >
        <input onChange={() => handleSingleIToggleItem(item.id)} readOnly type="checkbox" checked={item.packed} />
        {item.name}
      </label>
      <button onClick={() => handleRemoveSingleItem(item.id)} >  ❌  </button>
    </li>)
}