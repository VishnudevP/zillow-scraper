import React from "react";

function Savings({ savings }) {
  return (
    <div className="savings">
      <h2>Savings</h2>
      <p>3% Realtor Fee: {savings.realtorFee}</p>
      <p>Your Monthly Savings: {savings.monthlySavings}</p>
      <p>Your Total Savings over 30 years: {savings.totalSavings}</p>
    </div>
  );
}

export default Savings;
