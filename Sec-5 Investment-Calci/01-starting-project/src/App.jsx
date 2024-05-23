
import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  // console.log("userinput", userInput)

  const inputIsValid = userInput.duration >=1;

  function handleChange(inputIdentifier, newValue) {
    console.log("value", newValue)
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && (<p className="center">Kindly ente Duration greater then zero</p>)}
      {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
