import { useEffect, useState } from "react";


const useClock = (initialState: number) => {
  // TODO
  // refer readme.md for what to return
  const [date, setDate] = useState(initialState);
    
    useEffect(() => {
      var timerID = setInterval( () => tick(), 1000 );
      return function cleanup() {
          clearInterval(timerID);
        };
     });
    
    function tick() {
      setDate(new Date());
     }
    
    const hours = date.getHours();
    const minutes = date.getMinutes()
    const seconds = date.getSeconds();

    return {hours,minutes,seconds} 
};

export default useClock;
