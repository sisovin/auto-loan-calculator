import React, { useState } from 'react';

const CalculatorForm = ({ onSubmit }) => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ loanAmount, interestRate, loanTerm });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="loanAmount">Loan Amount:</label>
        <input
          type="number"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="interestRate">Interest Rate:</label>
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="loanTerm">Loan Term (years):</label>
        <input
          type="number"
          id="loanTerm"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          required
        />
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default CalculatorForm;
