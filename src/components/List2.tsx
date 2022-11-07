import React, { ChangeEvent, useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  initialValues: number;
  label: string
};

const List2 = (props: List2Props) => {

  const {list, appendEnd, popStart, clear, reset} = useNumberList([4,5])
  const label = "List2"

  const [value, setValue] = useState("")

  const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
    setValue(event.target.value)
  }
  
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{label}</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">{/* Each element in a list */
         
         list.map((i: any)=>(
          <div>{i}</div>
         ))
      
      }</div>

      <input data-testid="list2-input" type="text" value={value} onChange={handleChange}  />
      <button data-testid="list2-btn-append-end" onClick={()=>appendEnd(Number(value))}>
        {/* Button to append new number to the end of the list */}
         Append End
      </button>
      <button data-testid="list2-btn-pop-start" onClick={popStart}>
        {/* Button to  pop first element of the list */}
        Pop Start
      </button>
      <button data-testid="list2-btn-clear" onClick={clear}>
        {/* Button to  clear the list */}
        Clear
      </button>
      <button data-testid="list2-btn-reset" onClick={reset}>
        {/* Button to  reset the list to initialValue */}
        Reset
      </button>
    </div>
  );
};

export default List2;
