import useForm from "../hooks/useForm";
import FormControl from "./FormControl";

const DaysFromDate = () => {
  const {
    firstDate,
    secondDate,
    firstDateHandler,
    secondDateHandler,
  } = useForm();

  return (
    <form className="tab">
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
      <button type="submit">Calculate</button>
    </form>
  );
};

export default DaysFromDate;
