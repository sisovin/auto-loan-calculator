import React from 'react';

const ResultsDisplay = ({ monthlyPayment, totalInterest, totalPayment }) => {
  return (
    <div>
      <h2>Loan Calculation Results</h2>
      <div>
        <label>Monthly Payment:</label>
        <span>{monthlyPayment}</span>
      </div>
      <div>
        <label>Total Interest:</label>
        <span>{totalInterest}</span>
      </div>
      <div>
        <label>Total Payment:</label>
        <span>{totalPayment}</span>
      </div>
    </div>
  );
};

export default ResultsDisplay;
