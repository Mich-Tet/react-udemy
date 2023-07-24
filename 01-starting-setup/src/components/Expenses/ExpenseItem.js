import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
const ExpenseItem = (props) => {
    
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {

        setTitle("New title")
    }
    
    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.date}></ExpenseDate>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div> 
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}
export default ExpenseItem;