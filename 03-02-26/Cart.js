import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  // State for 5 items with unique colors
  const [items, setItems] = useState([
    { id: 1, name: "Wireless Mouse", price: 25, quantity: 1, color: "#FFD700" }, 
    { id: 2, name: "Keyboard", price: 50, quantity: 1, color: "#87CEFA" },      
    { id: 3, name: "Gaming Pad", price: 15, quantity: 1, color: "#98FB98" },    
    { id: 4, name: "USB-C Cable", price: 10, quantity: 1, color: "#FFB6C1" },   
    { id: 5, name: "Laptop Stand", price: 40, quantity: 1, color: "#E6E6FA" },  
  ]);

  // Handler to update quantity by ID
  const updateQuantity = (id, delta) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + delta) } 
          : item
      )
    );
  };

  const resetAll = () => {
    setItems(items.map(item => ({ ...item, quantity: 1 })));
  };

  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      {/* Updated Title */}
      <h1>My Shopping Cart</h1>
      
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {items.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            onIncrease={() => updateQuantity(item.id, 1)}
            onDecrease={() => updateQuantity(item.id, -1)}
          />
        ))}
      </div>

      <div style={{ marginTop: "30px", borderTop: "2px solid #eee", paddingTop: "20px" }}>
        <h2>Total Amount: ${totalAmount}</h2>
        <button onClick={resetAll} style={{ padding: "10px 20px", cursor: "pointer" }}>Reset All</button>
      </div>
    </div>
  );
}

export default Cart;