import React, { useState } from 'react';
import { CalculatorForm, ResultsDisplay, AmortizationTable } from '../../components/AutoLoanCalculator';
import { calculateMonthlyPayment, calculateTotalInterest, calculateAmortizationSchedule } from '../../utils/loanCalculations';

const CalculatorPage = () => {
  const [loanDetails, setLoanDetails] = useState(null);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  const handleFormSubmit = ({ loanAmount, interestRate, loanTerm }) => {
    const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
    const totalInterest = calculateTotalInterest(loanAmount, interestRate, loanTerm);
    const amortizationSchedule = calculateAmortizationSchedule(loanAmount, interestRate, loanTerm);

    setLoanDetails({ monthlyPayment, totalInterest, totalPayment: loanAmount + totalInterest });
    setAmortizationSchedule(amortizationSchedule);
  };

  return (
    <div>
      <h1>Auto Loan Calculator</h1>
      <CalculatorForm onSubmit={handleFormSubmit} />
      {loanDetails && (
        <ResultsDisplay
          monthlyPayment={loanDetails.monthlyPayment}
          totalInterest={loanDetails.totalInterest}
          totalPayment={loanDetails.totalPayment}
        />
      )}
      {amortizationSchedule.length > 0 && (
        <AmortizationTable amortizationSchedule={amortizationSchedule} />
      )}
    </div>
  );
};

export default CalculatorPage;
