import React from "react";

const BetweenDates = () => {
  return (
    <form className="tab">
      <div className="form_control">
        <label htmlFor="first-date">First Date:</label>
        <input type="date" id="first-date" />
      </div>
      <div className="form_control">
        <label htmlFor="second-date">Second Date:</label>
        <input type="date" id="second-date" />
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default BetweenDates;
