import { create } from "zustand";
import { persist } from "zustand/middleware";

import { initialItems } from "../lib/constants";

export const useItemsStore = create(persist((set) => ({
  items: initialItems,

  addItem: (inputValue) => {
    const newItem = {
      id: new Date().getTime(),
      name: inputValue,
      packed: false,
    };
    set((state) => ({ items: [...state.items, newItem] }));
  },

  
  removeSingleItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      return { items: newItems };
    });
  },
  singleToggleItem: (id) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      return { items: newItems };
    });
  },

  removeAllItem: () => {
    set(() => ({ items: [] }));
  },
  resetToInitial: () => {
    set(() => ({ items: initialItems }));
  },
  markAllAsComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: true };
      });

      return { items: newItems };
    });
  },
  markAllAsIncomplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: false };
      });

      return { items: newItems };
    });
  },
  
}),{
  name: "items",
}));
