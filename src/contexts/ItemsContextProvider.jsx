import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
    const [items, setItems] = useState(
        () => JSON.parse(localStorage.getItem("items")) || initialItems
    );

    const handleAddItem = (inputValue) => {
        const newItem = {
            id: new Date().getTime(),
            name: inputValue,
            packed: false,
        };

        const newItems = [...items, newItem];
        setItems(newItems);
    };

    const handleRemoveAllItem = () => {
        setItems([]);
    };
    const handleRemoveSingleItem = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    };
    const handleSingleIToggleItem = (id) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, packed: !item.packed };
            }
            return item;
        });
        setItems(newItems);
    };

    const handleResetToInitial = () => {
        setItems(initialItems);
    };

    const handleMarkAllAsComplete = () => {
        const newItems = items.map((item) => {
            return { ...item, packed: true };
        });
        setItems(newItems);
    };

    const handleMarkAllAsIncomplete = () => {
        const newItems = items.map((item) => {
            return { ...item, packed: false };
        });
        setItems(newItems);
    };

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    return (
        <ItemsContext.Provider
            value={{
                items,
                handleAddItem,
                handleRemoveAllItem,
                handleRemoveSingleItem,
                handleSingleIToggleItem,
                handleResetToInitial,
                handleMarkAllAsComplete,
                handleMarkAllAsIncomplete,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
};

