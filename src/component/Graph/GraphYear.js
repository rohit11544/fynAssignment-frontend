import React, { useState, useEffect } from "react";
import BarGraph from "./BarGraph";

const GraphYear = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://vercel.com/rohit11544/fyn-assignment-backend/raid/getPriceOfYear"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Yearly Prices</h1>
      <BarGraph data={data} />
    </div>
  );
};

export default GraphYear;
