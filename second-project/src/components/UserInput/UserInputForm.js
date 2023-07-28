import { useState } from "react";
import classes from "./UserInputForm.module.css";
import InvalidInputForm from "../InvalidInputForm/InvalidInputForm";

const UserInputForm = ({ onAddUser }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [invalidInput, setInvalidInput] = useState(false);
    const [invalidAge, setInvalidAge] = useState(false);

    const nameHandler = (e) => {
        setName(e.target.value);
    };
    const ageHandler = (e) => {
        setAge(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (name.trim() === "" || age.trim() === "") {
            setInvalidInput(true);
        } else if (+age <= 0) {
            setInvalidAge(true);
        } else {
            const user = {
                name: name,
                age: age,
            };
            onAddUser(user);
            setName("");
            setAge("");
        }
    };
    const closePopupHandler = () => {
        setInvalidInput(false);
        setInvalidAge(false);
    };
    return (
        <>
            <form
                onSubmit={submitHandler}
                className={classes.myComponent}
            >
                <label htmlFor="name">Enter your name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    onChange={nameHandler}
                    value={name}
                />
                <label htmlFor="age">Enter your age</label>
                <input
                    id="age"
                    type="number"
                    placeholder="Age"
                    onChange={ageHandler}
                    value={age}
                />
                <button type="submit">Submit</button>
            </form>
            {invalidInput && (
                <InvalidInputForm
                    typeOfMessage="Invalid input!"
                    message="Try to pass data again!"
                    onClose={closePopupHandler}
                />
            )}
            {invalidAge && (
                <InvalidInputForm
                    typeOfMessage="Invalid age!"
                    message=" Should be greater then 0"
                    onClose={closePopupHandler}
                />
            )}
        </>
    );
};

export default UserInputForm;
