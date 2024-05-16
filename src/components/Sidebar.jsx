import AddItemForm from "./AddItemForm"
import ButtonGroup from "./ButtonGroup"

const Sidebar = ({ handleAddItem, handleRemoveAllItem, handleResetToInitial, handleMarkAllAsComplete, handleMarkAllAsIncomplete }) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handleResetToInitial={handleResetToInitial}
        handleRemoveAllItem={handleRemoveAllItem} />
    </div>
  )
}

export default Sidebar