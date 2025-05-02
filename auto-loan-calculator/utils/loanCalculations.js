export const calculateMonthlyPayment = (loanAmount, interestRate, loanTerm) => {
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  return (
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
  );
};

export const calculateTotalInterest = (loanAmount, interestRate, loanTerm) => {
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
  const numberOfPayments = loanTerm * 12;
  return monthlyPayment * numberOfPayments - loanAmount;
};

export const calculateAmortizationSchedule = (loanAmount, interestRate, loanTerm) => {
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  let balance = loanAmount;
  const amortizationSchedule = [];

  for (let paymentNumber = 1; paymentNumber <= numberOfPayments; paymentNumber++) {
    const interest = balance * monthlyInterestRate;
    const principal = monthlyPayment - interest;
    balance -= principal;
    amortizationSchedule.push({
      paymentNumber,
      principal,
      interest,
      balance: balance < 0 ? 0 : balance,
    });
  }

  return amortizationSchedule;
};
