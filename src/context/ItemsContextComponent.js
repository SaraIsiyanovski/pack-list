import React, { createContext, useState } from "react";

export const ItemContext = createContext(null);
export const ItemsContextComponent = ({ children }) => {
  const [initialItems, setInitialItems] = useState([]);
  const [sortBy, setSortBy] = useState();

  const value = { initialItems, setInitialItems, sortBy, setSortBy };
  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};
