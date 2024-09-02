import React from "react";

function MonthlyCosts({ costs }) {
  return (
    <div className="monthly-costs">
      <h2>Monthly Costs</h2>
      <p>Mortgage: {costs.mortgage}</p>
      <p>Property Tax: {costs.propertyTax}</p>
      <p>Utilities Estimate: {costs.utilities}</p>
      <p>Home Insurance: {costs.homeInsurance}</p>
      <p>Mortgage Insurance: {costs.mortgageInsurance}</p>
      <p>Total Monthly Cost: {costs.totalMonthlyCost}</p>
    </div>
  );
}

export default MonthlyCosts;
