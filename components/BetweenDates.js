import React, { Fragment } from "react";
import useForm from "../hooks/useForm";
import Error from "./Error";
import FormControl from "./FormControl";
import Result from "./Result";

const BetweenDates = () => {
  const {
    firstDate,
    secondDate,
    isSubmitted,
    isError,
    firstDateHandler,
    secondDateHandler,
    returnHandler,
    calculateHandler,
  } = useForm();

  // Calculate the difference between the first and second selected date
  const resultInDays =
    (new Date(secondDate).getTime() - new Date(firstDate).getTime()) /
    (1000 * 3600 * 24);

  return (
    <Fragment>
      {!isSubmitted ? (
        <form onSubmit={calculateHandler} className="tab">
          <FormControl
            id="first-date"
            type="date"
            max={secondDate}
            htmlFor="first-date"
            value={firstDate}
            onChange={firstDateHandler}
          >
            First Date:
          </FormControl>
          <FormControl
            id="second-date"
            type="date"
            min={firstDate}
            htmlFor="second-date"
            value={secondDate}
            onChange={secondDateHandler}
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
