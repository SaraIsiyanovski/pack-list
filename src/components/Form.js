import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../context/ItemsContextComponent";

export const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { initialItems, setInitialItems, setSortBy } = useContext(ItemContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    setInitialItems([...initialItems, newItem]);
    setDescription("");
    setQuantity(1);
    console.log(newItem);
  };

  const handleClear = () => {
    setInitialItems([]);
    setSortBy("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>What do you need for your trip?</p>
      <div className="select">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Item"
        />
      </div>

      <div>
        <button>Add</button>
        <button onClick={handleClear}>Clear list</button>
      </div>
    </form>
  );
};
