import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [visible, setVisible] = useState(false);
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date),
        };
        props.onSaveExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
    };
    return (
        <form onSubmit={submitHandler}>
            {visible ? (
                <>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label htmlFor="">Title</label>
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={titleChangeHandler}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="">Amount</label>
                            <input
                                type="number"
                                placeholder="Amount"
                                min="0.01"
                                step="0.01"
                                value={amount}
                                onChange={amountChangeHandler}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="">Date</label>
                            <input
                                type="date"
                                placeholder="Date"
                                min="2019-01-01"
                                max="2022-12-31"
                                value={date}
                                onChange={dateChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                        <button onClick={() => setVisible(false)}>
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                <button onClick={() => setVisible(true)}>
                    Add New Expense
                </button>
            )}
        </form>
    );
};
export default ExpenseForm;
