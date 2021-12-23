import React, { useState } from "react"
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
      id: uuid(), 
      name: '',
      category: "Produce",
    });
  
  function handleItemForm(event) {
    let name = event.target.name
    
    setNewItem({
      ...newItem,
      [name]: event.target.value
    })
    }

  return (
    <form className="NewItem" onSubmit={(e) => {
      e.preventDefault()
      onItemFormSubmit({...newItem, id: uuid()})}}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemForm} value={newItem.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemForm} value={newItem.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;