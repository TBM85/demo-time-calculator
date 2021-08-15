import React, { useEffect, useState } from 'react';

const useForm = () => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isError, setIsError] = useState(false);

  // Update the first date value every time it changes
  const firstInputHandler = (event) => {
    setFirstInput(event.target.value);
  };

  // Update the second date value every time it changes
  const secondInputHandler = (event) => {
    setSecondInput(event.target.value);
  };

  // Sets the value of date inputs
  const calculateHandler = (event) => {
    event.preventDefault();

    // If any of the date inputs are empty the "Calculate" button doesn't work
    if (!firstInput.trim().length || !secondInput.trim().length) {
      setIsError(true);
      return;
    } else {
      setIsSubmitted(true);
    }
  };

  // Return to calculator between dates
  const returnHandler = () => {
    setIsSubmitted(false);
    setFirstInput("");
    setSecondInput("");
  };

  useEffect(() => {
    if (firstInput.length > 0 && secondInput.length > 0) {
      setIsError(false);
    }
  }, [firstInput, secondInput]);

  return {
    firstInput,
    secondInput,
    isSubmitted,
    isError,
    firstInputHandler,
    secondInputHandler,
    returnHandler,
    calculateHandler
  }
};

export default useForm;