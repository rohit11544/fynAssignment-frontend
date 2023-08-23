// Graph.js
import React, { useState, useEffect } from "react";
import BarGraph from "./BarGraph";
import axios from "axios";

const GraphMonth = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fyn-assignment-backend.vercel.app/raid/getPriceOfMonth")
      .then((response) => {
        setData(response.data);
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

export default GraphMonth;
