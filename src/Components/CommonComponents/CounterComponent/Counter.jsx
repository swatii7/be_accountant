import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title, separator, className, prefix}) {
  return (
    <div className="number">
      <CountUp duration={2} className={className} separator={separator} end={number} prefix={prefix} />
      <span>{title}</span>
    </div>
  );
}
