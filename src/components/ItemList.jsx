import { useMemo, useState } from "react"
import EmptyView from "./EmptyView"
import Select from 'react-select'


const options = [{
  value: 'default',
  label: 'Sort by Default'
}, {
  value: 'packed',
  label: 'Sort by Packed'
}, {
  value: 'unpacked',
  label: 'Sort by Unpacked'

}]

const ItemList = ({ items, handleRemoveSingleItem, handleSingleIToggleItem }) => {
  const [sortBy, setSortBy] = useState('default')


  const sortedItems = useMemo(() => [...items].sort((a, b) => {

    if (sortBy === 'unpacked') {
      return a.packed - b.packed
    }
    if (sortBy === 'packed') {
      return b.packed - a.packed
    }
    return;
  }), [items, sortBy])

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 &&
        <section className="sorting">
          <Select onChange={options => setSortBy(options.value)} defaultValue={options[0]} options={options} />
        </section>
      }
      {
        sortedItems.map((item) => {
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