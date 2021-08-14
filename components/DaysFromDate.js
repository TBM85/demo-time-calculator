import { Fragment } from "react";
import useForm from "../hooks/useForm";
import Error from "./Error";
import FormControl from "./FormControl";
import Result from "./Result";

const DaysFromDate = () => {
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

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const isDaysFromDate = true;

  // Calculate the date that will be, after the selected days
  // from the selected date
  const newDate = new Date(firstDate).setDate(
    new Date(firstDate).getDate() + 1 + parseInt(secondDate)
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
            value={firstDate}
            onChange={firstDateHandler}
          >
            First Date:
          </FormControl>
          <FormControl
            id="days"
            type="number"
            htmlFor="days"
            value={secondDate}
            onChange={secondDateHandler}
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
