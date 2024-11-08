import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill && paidByUser ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : paidByUser);
  }

  return (
    <form action="" className={`form-split-bill`} onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="bill-value">Bill Value</label>
      <input
        type="text"
        name=""
        id="bill-value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="user-expense">Your Expense</label>
      <input
        type="text"
        name=""
        id="user-expense"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label htmlFor="friend-expense">{selectedFriend.name}'s Expense</label>
      <input
        type="text"
        name=""
        id="friend-expense"
        disabled
        value={paidByFriend}
      />

      <label htmlFor="who_pays">💰 Who's paying the bill?</label>
      <select
        name=""
        id="who_pays"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
