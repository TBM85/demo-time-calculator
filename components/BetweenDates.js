import React, { Fragment, useEffect, useState } from "react";

const BetweenDates = () => {
  const [firstDate, setFirstDate] = useState("");
  const [secondDate, setSecondDate] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isError, setIsError] = useState(false);

  // Sets the value of date inputs
  const calculateHandler = (event) => {
    event.preventDefault();

    // If any of the date inputs are empty the "Calculate" button doesn't work
    if (!firstDate.trim().length || !secondDate.trim().length) {
      setIsError(true);
      return;
    } else {
      setIsSubmitted(true);
    }
  };

  // Calculate the difference between the first and second selected date
  const resultInDays =
    (new Date(secondDate).getTime() - new Date(firstDate).getTime()) /
    (1000 * 3600 * 24);

  // Return to calculator between dates
  const returnHandler = () => {
    setIsSubmitted(false);
    setFirstDate("");
    setSecondDate("");
  };

  // Update the first date value every time it changes
  const firstDateHandler = (event) => {
    setFirstDate(event.target.value);
  }

  // Update the second date value every time it changes
  const secondDateHandler = (event) => {
    setSecondDate(event.target.value);
  }

  useEffect(() => {
    if (firstDate.length > 0 && secondDate.length > 0) {
      setIsError(false);
    };
  }, [firstDate, secondDate]);

  return (
    <Fragment>
      {!isSubmitted ? (
        <form onSubmit={calculateHandler} className="tab">
          <div className="form_control">
            <label htmlFor="first-date">First Date:</label>
            <input
              type="date"
              id="first-date"
              value={firstDate}
              onChange={firstDateHandler}
            />
          </div>
          <div className="form_control">
            <label htmlFor="second-date">Second Date:</label>
            <input
              type="date"
              id="second-date"
              min={firstDate}
              value={secondDate}
              onChange={secondDateHandler}
            />
          </div>
          <small className={isError ? "danger" : "transparent"}>
            *A date is required on both entries
          </small>
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
