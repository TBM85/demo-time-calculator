import React from 'react';

const Error = (props) => {
  const { isError } = props;
  
  return (
    <small className={isError ? "danger" : "transparent"}>
      *A date is required on both entries
    </small>
  );
};

export default Error;