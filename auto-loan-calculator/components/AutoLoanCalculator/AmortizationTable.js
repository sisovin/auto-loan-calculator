import React from 'react';

const AmortizationTable = ({ amortizationSchedule }) => {
  return (
    <div>
      <h2>Amortization Table</h2>
      <table>
        <thead>
          <tr>
            <th>Payment Number</th>
            <th>Principal</th>
            <th>Interest</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {amortizationSchedule.map((payment, index) => (
            <tr key={index}>
              <td>{payment.paymentNumber}</td>
              <td>{payment.principal}</td>
              <td>{payment.interest}</td>
              <td>{payment.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmortizationTable;
