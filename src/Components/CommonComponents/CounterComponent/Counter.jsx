import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title, separator, className, prefix, start, scrollSpyDelay}) {
  return (
    <div className="number">
      <CountUp duration={5} className={className} separator={separator} start={start} end={number} prefix={prefix} scrollSpyDelay={scrollSpyDelay} />
      <span>{title}</span>
    </div>
  );
}
