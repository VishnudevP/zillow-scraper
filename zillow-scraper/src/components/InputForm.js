import React, { useState } from "react";

function InputForm({ onScrape }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      onScrape(url);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Zillow URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Analyze</button>
    </form>
  );
}

export default InputForm;
