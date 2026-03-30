import React from "react";

function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <div style={{
        border: "1px solid #ddd",
        borderRadius: "15px",
        padding: "15px",
        width: "200px",
        backgroundColor: item.color,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
      }}>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p><strong>Qty: {item.quantity}</strong></p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={onIncrease} style={btnStyle}> + </button>
        
        {/* Bonus Challenge: Disable button when quantity is 0 */}
        <button 
          onClick={onDecrease} 
          disabled={item.quantity === 0} 
          style={{ ...btnStyle, opacity: item.quantity === 0 ? 0.5 : 1 }}
        > - </button>
      </div>
      
      <p style={{ marginTop: "10px", fontSize: "0.85rem" }}>
        Subtotal: ${item.quantity * item.price}
      </p>
    </div>
  );
}

const btnStyle = { padding: "5px 12px", cursor: "pointer" };

export default CartItem;