import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items, display }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
    
  });
  
  
  return (
    <>
    <div><Filter onCategoryChange={handleCategoryChange} /></div>
    <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        </ul>
    </>
    
    
  );
}

export default ShoppingList;
