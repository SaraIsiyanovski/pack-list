import React, { useContext } from "react";
import { ItemContext } from "../context/ItemsContextComponent";

export const Stats = () => {
  const { initialItems } = useContext(ItemContext);

  const packedItems = initialItems.filter((item) => {
    return item.packed === true;
  });

  return (
    <div className="stats">
      {initialItems.length > 0
        ? `You have packed ${packedItems.length > 0 ? packedItems.length : 0}/${
            initialItems.length
          } items from your list.`
        : "You don't have items on your list."}
    </div>
  );
};
