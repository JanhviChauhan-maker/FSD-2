import React from 'react';
import ProductList from './ProductList'; // Fixed capitalization match

function App() {
  // Your commented data for practice:
  /*
  const obj = [
    { id: 1, name: "ab", age: 56 },
    { id: 2, name: "cd", age: 34 },
    { id: 3, name: "ef", age: 23 }
  ];
  */

  return (
    <div>
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
}
export default App;
