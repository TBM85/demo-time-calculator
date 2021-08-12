import React, { useRef, useState } from "react";

const BetweenDates = () => {
  const firstInput = useRef();
  const secondInput = useRef();

  const [firstDate, setFirstDate] = useState();
  const [secondDate, setSecondDate] = useState();

  // Sets the value of date inputs
  const calculateHandler = (event) => {
    event.preventDefault();

    const enteredFirstValue = firstInput.current.value;
    const enteredSecondValue = secondInput.current.value;

    setFirstDate(enteredFirstValue);
    setSecondDate(enteredSecondValue);
  };

  console.log(firstDate);
  console.log(secondDate);

  return (
    <form onSubmit={calculateHandler} className="tab">
      <div className="form_control">
        <label htmlFor="first-date">First Date:</label>
        <input type="date" id="first-date" ref={firstInput} />
      </div>
      <div className="form_control">
        <label htmlFor="second-date">Second Date:</label>
        <input type="date" id="second-date" ref={secondInput} />
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default BetweenDates;
