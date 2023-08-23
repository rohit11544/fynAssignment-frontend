import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarGraph = ({ data }) => {
  const svgRef = useRef();
  const width = 400;
  const height = 250;
  const margin = { top: 40, right: 20, bottom: 30, left: 40 };

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const months = Object.keys(data);
    const prices = Object.values(data);

    const width = 400;
    const height = 250;
    const margin = { top: 40, right: 20, bottom: 30, left: 40 };

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const xScale = d3
      .scaleBand()
      .domain(months)
      .range([0, chartWidth])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(prices)])
      .range([chartHeight, 0]);

    // Append bars
    svg
      .selectAll("rect")
      .data(prices)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(months[i]))
      .attr("y", (d) => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => chartHeight - yScale(d))
      .attr("fill", "steelblue");

    // Append x-axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(xScale));

    // Append labels
    svg
      .selectAll(".label")
      .data(prices)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => xScale(months[i]) + xScale.bandwidth() / 2)
      .attr("y", (d) => yScale(d) - 10)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "black");
  }, [data]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {/* You can add other SVG elements here if needed */}
      </g>
    </svg>
  );
};

export default BarGraph;
