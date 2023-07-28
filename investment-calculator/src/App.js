import { useState } from "react";
import Header from "./components/Header/Header";
import InvestmentForm from "./components/Investments/InvestmentForm";
import InvestmentTable from "./components/Table/InvestmentTable";
function App() {
    const [userInput, setUserInput] = useState(null);

    const calculateHandler = (userInput) => {
        setUserInput(userInput);
    };

    const yearlyData = [];

    if (userInput) {
        let currentSavings = +userInput["current-savings"];
        const yearlyContribution = +userInput["yearly-contribution"];
        const expectedReturn = +userInput["expected-return"] / 100;
        const duration = +userInput["duration"];

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }

        // use like this:
    }

    return (
        <div>
            <Header></Header>
            <InvestmentForm onCalculate={calculateHandler} />
            {/* Todo: Show below table conditionally (only once result data is available) */}
            {/* Show fallback text if no data is available */}
            {!userInput && <p style={{ textAlign: "center" }}>Nothing here</p>}
            {userInput && (
                <InvestmentTable
                    data={yearlyData}
                    initialInvestment={userInput["current-savings"]}
                />
            )}
        </div>
    );
}

export default App;
