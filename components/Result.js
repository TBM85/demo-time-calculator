import React from "react";

const Result = (props) => {
  const { result, returnHandler, isDaysFromDate } = props;

  return (
    <div className="tab">
      <div className="tab-text">
        <p>
          {!isDaysFromDate
            ? "The difference between the selected dates is:"
            : "The resulting date is:"}
        </p>
        <p>
          {result} {!isDaysFromDate ? "days" : ""}
        </p>
      </div>
      <button type="button" onClick={returnHandler}>
        Return
      </button>
    </div>
  );
};

export default Result;
