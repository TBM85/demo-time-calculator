import React, { Fragment, useRef, useState } from "react";

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

  // Calculate the difference between the first and second selected date
  const resultInDays =
    (new Date(secondDate).getTime() - new Date(firstDate).getTime()) /
    (1000 * 3600 * 24);

  return (
    <Fragment>
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
      <div>
        The difference between the selected dates is {resultInDays} days
      </div>
    </Fragment>
  );
};

export default BetweenDates;
