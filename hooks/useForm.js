import React, { useEffect, useState } from 'react';

const useForm = () => {
  const [firstDate, setFirstDate] = useState("");
  const [secondDate, setSecondDate] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isError, setIsError] = useState(false);

  // Update the first date value every time it changes
  const firstDateHandler = (event) => {
    setFirstDate(event.target.value);
  };

  // Update the second date value every time it changes
  const secondDateHandler = (event) => {
    setSecondDate(event.target.value);
  };

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

  // Return to calculator between dates
  const returnHandler = () => {
    setIsSubmitted(false);
    setFirstDate("");
    setSecondDate("");
  };

  useEffect(() => {
    if (firstDate.length > 0 && secondDate.length > 0) {
      setIsError(false);
    }
  }, [firstDate, secondDate]);

  return {
    firstDate,
    secondDate,
    isSubmitted,
    isError,
    firstDateHandler,
    secondDateHandler,
    returnHandler,
    calculateHandler
  }
};

export default useForm;