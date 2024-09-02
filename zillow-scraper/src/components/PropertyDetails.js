import React from "react";

function PropertyDetails({ details }) {
  return (
    <div className="property-details">
      <h2>Property Details</h2>
      <p>Address: {details.address}</p>
      <p>Price: {details.price}</p>
      <p>Square Footage: {details.square_footage}</p>
      <p>Bedrooms: {details.bedrooms}</p>
      <p>Bathrooms: {details.bathrooms}</p>
      <p>Year Built: {details.year_built}</p>
      <p>Property Type: {details.property_type}</p>
    </div>
  );
}

export default PropertyDetails;
