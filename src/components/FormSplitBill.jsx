import Button from "./Button";

function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>split a bill with X</h2>
      <label htmlFor="">Bill Value</label>
      <input type="text" name="" id="" />

      <label htmlFor="">Your Expense</label>
      <input type="text" name="" id="" />

      <label htmlFor="">X's Expense</label>
      <input type="text" name="" id="" disabled />

      <label htmlFor="">💰 Who's paying the bill?</label>
      <select name="" id="">
        <option value="">You</option>
        <option value="">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
