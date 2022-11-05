import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemData, setItemData] = useState({
    id:uuid(),
    name: "",
    category : ""
  })

  const handleFormInput= e =>{
    const {name, value} = e.target;
    setItemData({...itemData, [name] : value});
  }

  const handleSubmit = e =>{
      e.preventDefault();

      onItemFormSubmit(itemData);
      setItemData ({
        id:uuid(),
        name: "",
        category : ""
      })

  }

  return (
    <form className="NewItem" onSubmit={ handleSubmit }>
      <label>
        Name:
        <input type="text" name="name" value = {itemData.name} onChange ={handleFormInput}/>
      </label>

      <label>
        Category:
        <select name="category" value = {itemData.category} onChange ={handleFormInput}>
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
