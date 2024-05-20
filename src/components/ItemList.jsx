import { useMemo, useState } from "react";
import Select from "react-select";
import { useItemsStore } from "../store/itemStore";

import EmptyView from "./EmptyView";

const options = [
  {
    value: "default",
    label: "Sort by Default",
  },
  {
    value: "packed",
    label: "Sort by Packed",
  },
  {
    value: "unpacked",
    label: "Sort by Unpacked",
  },
];

const ItemList = () => {
  const items = useItemsStore((state) => state.items);
  const singleToggleItem = useItemsStore((state) => state.singleToggleItem);
  const removeSingleItem = useItemsStore((state) => state.removeSingleItem);

  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(options) => setSortBy(options.value)}
            defaultValue={options[0]}
            options={options}
          />
        </section>
      )}
      {sortedItems.map((item) => {
        return (
          <Items
            singleToggleItem={singleToggleItem}
            removeSingleItem={removeSingleItem}
            key={item.id}
            item={item}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;

function Items({ item, removeSingleItem, singleToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => singleToggleItem(item.id)}
          readOnly
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => removeSingleItem(item.id)}> ❌ </button>
    </li>
  );
}
