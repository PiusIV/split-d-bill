import Button from "./Button";

function FormSplitBill({ selectedFriend }) {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="">Bill Value</label>
      <input type="text" name="" id="" />

      <label htmlFor="">Your Expense</label>
      <input type="text" name="" id="" />

      <label htmlFor="">{selectedFriend.name}'s Expense</label>
      <input type="text" name="" id="" disabled />

      <label htmlFor="">💰 Who's paying the bill?</label>
      <select name="" id="">
        <option value="">You</option>
        <option value="">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
