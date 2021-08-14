import React from 'react';

const Result = (props) => {
  const { resultInDays, returnHandler } = props;
  
  return (
    <div className="tab">
      <div className="tab-text">
        <p>The difference between the selected dates is:</p>
        <p>{resultInDays} days</p>
      </div>
      <button type="button" onClick={returnHandler}>
        Return
      </button>
    </div>
  );
};

export default Result;