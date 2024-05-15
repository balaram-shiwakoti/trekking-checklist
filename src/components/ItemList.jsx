


const ItemList = ({ items }) => {

  return (
    <ul>
      {
        items.map((item) => {
          return <Items key={item.id} item={item} />
        })
      }

    </ul>
  )
}

export default ItemList

function Items({ item }) {
  return (
    <li className="item" >
      <label >
        <input type="checkbox" defaultChecked={item.packed} />
        {item.name}
      </label>
      <button>  ❌  </button>
    </li>)
}