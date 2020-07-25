import React, { useContext } from "react";
import ExpenseContext from "../../context/expense/expenseContext";

function SavingsList({ savItem }) {
  const expenseContext = useContext(ExpenseContext);

  function deleteSav() {
    expenseContext.DeleteSavItem(savItem.id);
  }
  return (
    <div>
      <div className="expItem" key={savItem.id}>
        <div>
          <b>
            {savItem.title}
            {/* <span>({savItem.type})</span> deleteSav */}
          </b>
        </div>
        <div>
          <span>₹{savItem.amount}</span>
          <i
            onClick={deleteSav}
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

export default SavingsList;
