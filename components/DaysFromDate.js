import useForm from "../hooks/useForm";
import Error from "./Error";
import FormControl from "./FormControl";

const DaysFromDate = () => {
  const {
    firstDate,
    secondDate,
    isError,
    firstDateHandler,
    secondDateHandler,
    calculateHandler
  } = useForm();

  return (
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
  );
};

export default DaysFromDate;
