import React, { useState } from "react";
import "./InvestmentForm.css";

const initialUserInput = {
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10,
};

const InvestmentForm = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const calculateHandler = (event) => {
        event.preventDefault();
        //todo
        console.log("Calculate clicked");
    };
    const resetHandler = () => {};
    const inputHandler = (input, value) => {
        setUserInput((prevSavings) => {
            return { ...prevSavings, [input]: value };
        });
    };
    return (
        <form
            onSubmit={calculateHandler}
            className="form"
        >
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        // value={currentSavings}
                        onChange={(event) =>
                            inputHandler("current-savings", event.target.value)
                        }
                        type="number"
                        id="current-savings"
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Yearly Savings ($)
                    </label>
                    <input
                        // value={yearlySavings}
                        onChange={(event) =>
                            inputHandler(
                                "yearly-contribution",
                                event.target.value
                            )
                        }
                        type="number"
                        id="yearly-contribution"
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        // value={expectedInterest}
                        onChange={(event) =>
                            inputHandler("expected-return", event.target.value)
                        }
                        type="number"
                        id="expected-return"
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Investment Duration (years)
                    </label>
                    <input
                        // value={investmentDuration}
                        onChange={(event) =>
                            inputHandler("duration", event.target.value)
                        }
                        type="number"
                        id="duration"
                    />
                </p>
            </div>
            <p className="actions">
                <button
                    type="reset"
                    className="buttonAlt"
                    onClick={() => {
                        resetHandler();
                    }}
                >
                    Reset
                </button>
                <button
                    type="submit"
                    className="button"
                >
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default InvestmentForm;
