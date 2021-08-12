import React from "react";

const BetweenDates = () => {
  return (
    <form className="tab">
      <div>
        <label htmlFor="first-date">First Date:</label>
        <input type="date" id="first-date" />
      </div>
      <div>
        <label htmlFor="second-date">Second Date:</label>
        <input type="date" id="second-date" />
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default BetweenDates;
