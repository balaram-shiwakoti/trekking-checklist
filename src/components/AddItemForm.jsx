import Button from "./Button"

const AddItemForm = () => {
    return (
        <form>
            <h2>Add an item</h2>
            <input type="text" />
            <Button label='Add to list' />
        </form>
    )
}

export default AddItemForm