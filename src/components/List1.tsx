import React, { ChangeEvent, useState } from "react";
import { arrayBuffer } from "stream/consumers";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
  initialValues: number;
  label: string
};
const List1 = (props: List1Props) => {
  const {list,appendStart, popEnd, clear, reset} = useNumberList([1, 2, 3])
  const label = "List1"
  const [value, setValue]  = useState("")

  const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
    setValue(event.target.value)
  }

  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{label}</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element">{/* Each element in a list */
      
       list.map((i: any)=>(
        <div>{i}</div>
       ))
      
      }</div>
      
        
      
      <input data-testid="list1-input" type="text" value={value} onChange={handleChange} />
      <button data-testid="list1-btn-append-start" onClick={()=>appendStart(Number(value))}>
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button data-testid="list1-btn-pop-end" onClick={popEnd}>
        {/* po last element btn */}
        Pop End
      </button>
      <button data-testid="list1-btn-clear" onClick={clear}>
        {/* clear list and set empty button */}
        Clear
      </button>
      <button data-testid="list1-btn-reset" onClick={reset}>
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;
