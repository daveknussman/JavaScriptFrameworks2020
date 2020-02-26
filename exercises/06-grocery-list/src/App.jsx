import React, { useState } from "react";
import "./App.css";

const GroceryList = () => {

  const [groceryList, setGroceryList] = useState([]);

  const [totalCost, setTotalCost] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    ((newItem !== ' ') && (newCost > 0)) ? setGroceryList([...groceryList, {'item':newItem, 'cost':newCost}]) : alert('Grocery Item and Cost are required to add item to list');
    setTotalCost(totalCost + newCost);
    setNewItem('');
    setNewCost('');
    // setTotalCost(0,groceryList.forEach(item => totalCost + item.cost));
  }

  const deleteItem = delIndex => {
    // alert(delIndex);
    // console.log(groceryList[delIndex].cost);
    setTotalCost(totalCost - groceryList[delIndex].cost);
    setGroceryList(groceryList.filter((item, currentIndex) => currentIndex !== delIndex));
    // setTotalCost(0,groceryList.forEach(item => totalCost + item.cost));
  }

  const [newItem, setNewItem] = useState('');
  const handleItemChange = e => {
    setNewItem(e.target.value);
  }

  const [newCost, setNewCost] = useState('');
  const handleCostChange = e => {
    setNewCost(Number(e.target.value));
  }

  const clearList = () => {
    setGroceryList([]);
    setTotalCost(0);
    // setTotalCost(0,groceryList.forEach(item => totalCost + item.cost));
  }

   return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        {/* added onSubmit as the event handler for form being submitted and add button clicking.  This is better because the state and handler is on form and not the button.  This works since the add button is of type submit on the form */}
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Name of grocery item..."
            aria-label="Name of grocery item..."
            onChange={handleItemChange}
            value={newItem}
            // name='addNewItem'
          />
          <input
            className="form-control"
            type="number"
            min="0"
            step=".01"
            placeholder="Cost of grocery Item..."
            aria-label="Cost of grocery Item..."
            onChange={handleCostChange}
            value={newCost}
            // name='addNewCost'
          />
          <div>
          {/* removed onClick on button and handling on for using onSubmit as the event.  This works since the add button is of type submit on the form */}
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-compact">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {groceryList.map((item, index) => {
              return (
                <tr>
                  <td>{item.item}</td>
                  <td>{item.cost}</td>
                  <td>
                    <button className="btn btn-success" onClick={() => deleteItem(index)}>Delete Item</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: {totalCost}</strong>
        </p>
        <div className="text-right">
          <button type="button" className="btn btn-outline-success" onClick={clearList}>
            Clear
          </button>
          <button type="button" className="btn btn-outline-success" onClick={() => groceryList.forEach(item => console.log(item))}>
            Log List
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
