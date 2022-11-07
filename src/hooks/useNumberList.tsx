import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
   const [arr,setArr] = useState(initialArray)

   const list=()=>{
       return arr
   }

   const appendStart=(value: string)=>{

    const updatedArr= value.concat(arr)
    setArr(updatedArr)

   }

   const appendEnd=(value: number)=>{
    const updatedArr= arr.concat(value)
    setArr(updatedArr)
   }

   const popStart=()=>{
     setArr(arr.shift())
   }

   const popEnd=()=>{
    setArr(arr.pop())
   }

   const clear=()=>{
     setArr("")
   }

   const reset=()=>{
    setArr(initialArray)
   }

   return {list, appendEnd, appendStart, popEnd, popStart, clear, reset}
};

export default useNumberList;
