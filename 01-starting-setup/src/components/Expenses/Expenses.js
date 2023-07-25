import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {
    const [selectedDate, setSelectedDate] = useState("");

    const filteredByDate = props.items.filter((expense) => {
        if (selectedDate === "") {
            return true;
        } else {
            return expense.date.getFullYear().toString() === selectedDate;
        }
    });

    const onSelectedDate = (selectedYear) => {
        setSelectedDate(selectedYear);
    };
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={selectedDate}
                    onChangeDate={onSelectedDate}
                ></ExpenseFilter>
                <ExpensesChart expenses={filteredByDate}></ExpensesChart>

                <ExpensesList items={filteredByDate} />
            </Card>
        </div>
    );
};
export default Expenses;
