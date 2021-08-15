import { Fragment } from "react";
import useForm from "../hooks/useForm";
import Error from "./Error";
import FormControl from "./FormControl";
import Result from "./Result";

const DaysFromDate = () => {
  const {
    firstInput,
    secondInput,
    isSubmitted,
    isError,
    firstInputHandler,
    secondInputHandler,
    returnHandler,
    calculateHandler,
  } = useForm();

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const isDaysFromDate = true;

  // Calculate the date that will be, after the selected days
  // from the selected date
  const newDate = new Date(firstInput).setDate(
    new Date(firstInput).getDate() + 1 + parseInt(secondInput)
  );

  const resultInDate = new Date(newDate).toLocaleString("en-US", options);

  return (
    <Fragment>
      {!isSubmitted ? (
        <form onSubmit={calculateHandler} className="tab">
          <FormControl
            id="first-date"
            type="date"
            htmlFor="first-date"
            value={firstInput}
            onChange={firstInputHandler}
          >
            First Date:
          </FormControl>
          <FormControl
            id="days"
            type="number"
            htmlFor="days"
            value={secondInput}
            onChange={secondInputHandler}
          >
            Days:
          </FormControl>
          <Error isError={isError} />
          <button type="submit">Calculate</button>
        </form>
      ) : (
        <Result
          result={resultInDate}
          returnHandler={returnHandler}
          isDaysFromDate={isDaysFromDate}
        />
      )}
    </Fragment>
  );
};

export default DaysFromDate;
