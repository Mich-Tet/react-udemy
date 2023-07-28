import React, { useState } from "react";
import classes from "./InvestmentForm.module.css";

const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
};

const InvestmentForm = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const calculateHandler = (event) => {
        event.preventDefault();
        //todo
        props.onCalculate(userInput);
    };
    const resetHandler = () => {
        setUserInput(initialUserInput);
    };
    const inputHandler = (input, value) => {
        setUserInput((prevSavings) => {
            return { ...prevSavings, [input]: +value };
        });
    };
    return (
        <form
            onSubmit={calculateHandler}
            className={classes.form}
        >
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(event) =>
                            inputHandler("current-savings", event.target.value)
                        }
                        value={userInput["current-savings"]}
                        type="number"
                        id="current-savings"
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Yearly Savings ($)
                    </label>
                    <input
                        onChange={(event) =>
                            inputHandler(
                                "yearly-contribution",
                                event.target.value
                            )
                        }
                        value={userInput["yearly-contribution"]}
                        type="number"
                        id="yearly-contribution"
                    />
                </p>
            </div>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        onChange={(event) =>
                            inputHandler("expected-return", event.target.value)
                        }
                        value={userInput["expected-return"]}
                        type="number"
                        id="expected-return"
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Investment Duration (years)
                    </label>
                    <input
                        onChange={(event) =>
                            inputHandler("duration", event.target.value)
                        }
                        value={userInput["duration"]}
                        type="number"
                        id="duration"
                    />
                </p>
            </div>
            <p className={classes.actions}>
                <button
                    type="reset"
                    className="buttonAlt"
                    onClick={resetHandler}
                >
                    Reset
                </button>
                <button
                    type="submit"
                    className={classes.button}
                >
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default InvestmentForm;
