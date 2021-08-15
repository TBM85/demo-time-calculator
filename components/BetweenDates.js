import React, { Fragment } from "react";
import useForm from "../hooks/useForm";
import Error from "./Error";
import FormControl from "./FormControl";
import Result from "./Result";

const BetweenDates = () => {
  const {
    firstInput,
    secondInput,
    isSubmitted,
    isError,
    firstInputHandler,
    secondInputHandler,
    returnHandler,
    calculateHandler
  } = useForm();

  // Calculate the difference between the first and second selected date
  const resultInDays =
    (new Date(secondInput).getTime() - new Date(firstInput).getTime()) /
    (1000 * 3600 * 24);

  return (
    <Fragment>
      {!isSubmitted ? (
        <form onSubmit={calculateHandler} className="tab">
          <FormControl
            id="first-date"
            type="date"
            max={secondInput}
            htmlFor="first-date"
            value={firstInput}
            onChange={firstInputHandler}
          >
            First Date:
          </FormControl>
          <FormControl
            id="second-date"
            type="date"
            min={firstInput}
            htmlFor="second-date"
            value={secondInput}
            onChange={secondInputHandler}
          >
            Second Date:
          </FormControl>
          <Error isError={isError} />
          <button type="submit">Calculate</button>
        </form>
      ) : (
        <Result result={resultInDays} returnHandler={returnHandler} />
      )}
    </Fragment>
  );
};

export default BetweenDates;
