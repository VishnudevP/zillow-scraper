import React, { useState } from "react";
import InputForm from "./components/InputForm";
import PropertyDetails from "./components/PropertyDetails";
import Savings from "./components/Savings";
import MonthlyCosts from "./components/MonthlyCosts";
import MortgageAssumptions from "./components/MortgageAssumptions";

function App() {
  const [propertyDetails, setPropertyDetails] = useState(null);

  const handleScrape = async (url) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.error) {
        console.error("Error:", data.error);
      } else {
        setPropertyDetails({
          property: data,
          savings: {
            realtorFee: "$44,400.00", // Replace these with actual scraped data later
            monthlySavings: "$295.39",
            totalSavings: "$106,341.95",
          },
          costs: {
            mortgage: "$7,877.18",
            propertyTax: "$1,454.10",
            utilities: "$400.00",
            homeInsurance: "$518",
            mortgageInsurance: "$641",
            totalMonthlyCost: "$10,890.28",
          },
          assumptions: {
            downPayment: "20%",
            interestRate: "7%",
            loanTerm: "30 years fixed",
            creditScore: "Tier 1",
          },
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Property Analysis</h1>
      <InputForm onScrape={handleScrape} />
      {propertyDetails && (
        <>
          <PropertyDetails details={propertyDetails.property} />
          <Savings savings={propertyDetails.savings} />
          <MonthlyCosts costs={propertyDetails.costs} />
          <MortgageAssumptions assumptions={propertyDetails.assumptions} />
        </>
      )}
    </div>
  );
}

export default App;
