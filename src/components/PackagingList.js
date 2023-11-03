import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../context/ItemsContextComponent";

export const Item = ({ item }) => {
  const { initialItems, setInitialItems } = useContext(ItemContext);

  const handleRemove = () => {
    const filtered = initialItems?.filter((items) => {
      return items.id !== item.id;
    });
    setInitialItems(filtered);
  };

  const handleDot = () => {
    const updated = initialItems.map((initItem) =>
      initItem.id === item.id
        ? { ...initItem, packed: !initItem.packed }
        : initItem
    );
    setInitialItems(updated);
  };
  return (
    <li className="item">
      <span
        onClick={handleDot}
        style={item.packed ? { backgroundColor: "#2a9bc5" } : {}}
        className="dot"
      ></span>
      <p className="items">
        <span>{item.quantity}</span>
        <span>{item.description}</span>
      </p>

      <button onClick={handleRemove} className="rem">
        Remove
      </button>
    </li>
  );
};

export const PackagingList = () => {
  const { initialItems, sortBy, setSortBy } = useContext(ItemContext);

  let sorted;

  if (sortBy === "input" && sortBy === "sort") sorted = initialItems;
  if (sortBy === "description")
    sorted = initialItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "unpacked")
    sorted = initialItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  if (sortBy === "packed")
    sorted = initialItems
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div>
      <div className="pack">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option disabled selected value="Sort">
            Sort by
          </option>
          <option value="input">Input</option>
          <option value="packed">Packed</option>
          <option value="unpacked">Unpacked</option>
          <option value="description">From A to Z</option>
        </select>
      </div>
      <div className="div-list">
        <ul className="list">
          {sorted
            ? sorted.map((item) => <Item item={item} />)
            : initialItems?.map((item) => <Item item={item} />)}
        </ul>
      </div>
    </div>
  );
};
