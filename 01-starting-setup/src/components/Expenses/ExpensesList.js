import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
    return (
        <ul className="expenses-list">
            {props.items.length === 0 ? (
                <p className="expenses-list__fallback">Nothing here</p>
            ) : (
                props.items.map((expense, index) => (
                    <ExpenseItem
                        key={index}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            )}
        </ul>
    );
};

export default ExpensesList;
