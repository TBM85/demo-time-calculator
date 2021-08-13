import useForm from "../hooks/useForm";
import FormControl from "./FormControl";

const DaysFromDate = () => {
  const {
    firstDate,
    firstDateHandler
  } = useForm();

  return (
    <form className="tab">
      <FormControl
        id="first-date"
        htmlFor="first-date"
        value={firstDate}
        onChange={firstDateHandler}
      >
        First Date:
      </FormControl>
    </form>
  );
};

export default DaysFromDate;
