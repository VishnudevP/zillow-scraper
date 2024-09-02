import React from 'react';

function MortgageAssumptions({ assumptions }) {
  return (
    <div className="mortgage-assumptions">
      <h2>Mortgage Assumptions</h2>
      <ul>
        <li>Down Payment: {assumptions.downPayment}</li>
        <li>Interest Rate: {assumptions.interestRate}</li>
        <li>Loan Term: {assumptions.loanTerm}</li>
        <li>Credit Score: {assumptions.creditScore}</li>
      </ul>
    </div>
  );
}

export default MortgageAssumptions;
