import { useRef, useState } from "react";

import Button from "./Button";

const AddItemForm = ({ onAddItem }) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) {
            alert("Items shouldn't be empty");
            inputRef.current.focus()
            return;
        }

        onAddItem(inputValue);
        setInputValue('')
    }


    return (
        <form
            onSubmit={handleSubmit}
        >
            <h2>Add an item</h2>
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoFocus
            />
            <Button label="Add to list" />
        </form>
    );
};

export default AddItemForm;
