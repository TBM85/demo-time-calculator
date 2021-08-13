import React, { Fragment, useRef, useState } from "react";

const BetweenDates = () => {
  const firstInput = useRef();
  const secondInput = useRef();

  const [firstDate, setFirstDate] = useState();
  const [secondDate, setSecondDate] = useState();

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sets the value of date inputs
  const calculateHandler = (event) => {
    event.preventDefault();

    const enteredFirstValue = firstInput.current.value;
    const enteredSecondValue = secondInput.current.value;

    // If any of the date inputs are empty the "Calculate" button doesn't work
    if (!enteredFirstValue.trim().length || !enteredSecondValue.trim().length) {
      return
    } else {
      setFirstDate(enteredFirstValue);
      setSecondDate(enteredSecondValue);

      setIsSubmitted(true);
    };
  };

  // Calculate the difference between the first and second selected date
  const resultInDays =
    (new Date(secondDate).getTime() - new Date(firstDate).getTime()) /
    (1000 * 3600 * 24);

  // Return to calculator between dates
  const returnHandler = () => {
    setIsSubmitted(false);
  };

  return (
    <Fragment>
      {!isSubmitted ? (
        <form onSubmit={calculateHandler} className="tab">
          <div className="form_control">
            <label htmlFor="first-date">First Date:</label>
            <input type="date" id="first-date" ref={firstInput} />
          </div>
          <div className="form_control">
            <label htmlFor="second-date">Second Date:</label>
            <input
              type="date"
              id="second-date"
              ref={secondInput}
            />
          </div>
          <button type="submit">Calculate</button>
        </form>
      ) : (
        <div className="tab">
          <div className="tab-text">
            <p>The difference between the selected dates is:</p>
            <p>{resultInDays} days</p>
          </div>
          <button type="button" onClick={returnHandler}>
            Return
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default BetweenDates;
