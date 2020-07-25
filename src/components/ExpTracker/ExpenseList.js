import React, { useContext } from "react";
import ExpenseContext from "../../context/expense/expenseContext";

function ExpList({ expItem }) {
  const expenseContext = useContext(ExpenseContext);

  function deleteExp() {
    expenseContext.DeleteExpItem(expItem.id);
  }
  
  return (
    <div>
      <div className="expItem" key={expItem.id}>
        <div>
          <b>{expItem.title}</b>
          {/* <span>{expItem.type}</span> */}
        </div>
        <div>
          <span>₹{expItem.amount}</span>
          <i
            onClick={deleteExp}
            className="material-icons"
            style={{
              fontSize: "18px",
              color: "#5d5d5d",
              textShadow: "2px 2px 4px #000000",
              marginLeft: "12px",
              cursor: "pointer"
            }}
          >
            delete
          </i>
        </div>
      </div>
    </div>
  );
}

export default ExpList;
