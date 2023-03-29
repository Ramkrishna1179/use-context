import React, { useReducer } from "react";
const initialState = { counter: 0, name: "John Doe", items: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + 1 };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    default:
      throw new Error();
  }
};
const ComplexComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT_COUNTER" });
  };
  const handleSetName = () => {
    dispatch({ type: "SET_NAME", payload: "Jane Doe" });
  };
  const handleAddItem = () => {
    dispatch({ type: "ADD_ITEM", payload: { id: 1, name: "Item 1" } });
  };
  return (
    <div> 
      <p>Counter: {state.counter}</p> <p>Name: {state.name}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleSetName}>Set Name</button>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default ComplexComponent;
