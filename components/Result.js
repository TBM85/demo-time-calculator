import React from 'react';

const Result = (props) => {
  const { result, returnHandler } = props;
  
  return (
    <div className="tab">
      <div className="tab-text">
        <p>The difference between the selected dates is:</p>
        <p>{result} days</p>
      </div>
      <button type="button" onClick={returnHandler}>
        Return
      </button>
    </div>
  );
};

export default Result;