import React, { useState } from "react";

type Props = {
  //  TODO
  label: string,
  hours: number;
  minutes: number;
  seconds: number
};

const Clock = (props: Props) => {

  const {hours,minutes,seconds} = useState<number>(new Date())
  const label = "24 Hour Live Custom Component Clock "

  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {/* Label */}
        {label} 
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */}
        {
          hours
        }
        </span>
        :
      <span data-testid="clock-minutes">
        {/* Minutes */}
        {
          minutes
        }
      </span>
       :
      <span data-testid="clock-seconds">
        {/* Seconds */}
        {
          seconds
        }
        </span>
    </div>
  );
};

export default Clock;
