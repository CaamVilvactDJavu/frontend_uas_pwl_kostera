import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

export interface ListItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  gender: string;
  specification: string;
  rule: string;
  address: string;
  facility: string;
  image_url: string;
}

export type ListContextValue = {
  listItems: ListItem[];
  addToList: (item: ListItem) => void;
  removeFromList: (item: ListItem) => void;
  clearList: () => void;
};

const ListContext = createContext({});

export function useList() {
  return useContext(ListContext);
}

export function ListProvider({ children }: { children: ReactNode }) {
  const [listItems, setListItems] = useState<ListItem[]>([]);

  const addToList = (item: ListItem) => {
    const itemInList = listItems.find((listItem) => listItem.id === item.id);

    if (itemInList) {
      const newListItems: ListItem[] = listItems.map((listItem) => {
        if (listItem.id === item.id) {
          return {
            ...listItem,
          };
        } else {
          return listItem;
        }
      });
      setListItems(newListItems);
    } else {
      setListItems([...listItems]);
    }
  };

  const removeFromList = (item: ListItem) => {
    const newListItems: ListItem[] = listItems.map((listItem) => {
      if (listItem.id === item.id) {
        return {
          ...listItem,
        };
      } else {
        return listItem;
      }
    });
    setListItems(newListItems);
  };

  const clearList = () => {
    setListItems([]);
  };

  const value: ListContextValue = {
    listItems: listItems,
    addToList: addToList,
    removeFromList: removeFromList,
    clearList: clearList,
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}
