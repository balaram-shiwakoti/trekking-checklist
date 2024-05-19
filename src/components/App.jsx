import { useEffect, useState } from "react"


import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import ItemList from "./ItemList"
import { initialItems } from "../lib/constants"
import BackgroundHeading from "./BackgroundHeading"


function App() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('items')) || initialItems)

  const handleAddItem = (inputValue) => {
    const newItem = {
      id: new Date().getTime(),
      name: inputValue,
      packed: false,
    };

    const newItems = [...items, newItem]
    setItems(newItems)
  }

  const handleRemoveAllItem = () => {
    setItems([])
  }
  const handleRemoveSingleItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }
  const handleSingleIToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed }
      }
      return item
    })
    setItems(newItems)

  }

  const handleResetToInitial = () => {
    setItems(initialItems)
  }

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true }
    })
    setItems(newItems)
  }

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false }
    })
    setItems(newItems)
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))

  }, [items])

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          packedItems={items.filter(item => item.packed).length}
          totalItems={items.length} />
        <ItemList
          handleSingleIToggleItem={handleSingleIToggleItem}
          handleRemoveSingleItem={handleRemoveSingleItem}
          items={items} />
        <Sidebar
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          handleResetToInitial={handleResetToInitial}
          handleRemoveAllItem={handleRemoveAllItem}
          handleAddItem={handleAddItem} />
      </main>
      <Footer />
    </>
  )
}

export default App


